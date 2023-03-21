<template>
  <NavigationBar />
  <h1>LIST OF MY REPOS</h1>

  <div v-if="!getAllRepos.length > 0 && loading" class="loading">
    <p>loading........</p>
  </div>

  <ul v-if="getAllRepos.length > 0 && !loading">
    <RepoItem
      v-for="(repo, index) in displayedRepos"
      :key="index"
      :repo="repo"
      :id="repo.id"
    />
  </ul>
  <p v-if="!getAllRepos.length > 0 && !loading">
    No Repo founds
  </p>
  <ReposPagination
    v-if="getAllRepos.length > 0"
    :reposPerPage="reposPerPage"
    :totalRepos="getAllRepos.length"
    @setNewPageNumber="setNewPageHandler" />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import store from "../../store/index";
import { ref, computed } from "vue";
import RepoItem from "./RepoItem";
import ReposPagination from "./ReposPagination";

export default {
  name: "RepossHome",
  components: { ReposPagination, RepoItem, NavigationBar },
  setup() {
    const loading = ref(false);
    const fetchRepo = async () => {
      loading.value = true;
      const response = await fetch(
        "https://api.github.com/users/Nzekwe131/repos"
      );

      const responseBody = await response.json();

      const modifiedBody = responseBody.map((repo, index) => ({
        ...repo,
        newId: index,
      }));
      store.dispatch("fetchRepos", modifiedBody);
      loading.value = false;
    };
    fetchRepo();

    // This is the logic for pagination
    const start = ref(0);
    const reposPerPage = 5;
    const getAllRepos = computed(() => store.getters.getAllRepos);
    const end = computed(() => start.value + reposPerPage);
    const displayedRepos = computed(() =>
      getAllRepos.value.slice(start.value, end.value)
    );
    function setStart(num) {
      start.value = num;
    }

    function setNewPageHandler(number) {
      setStart(number * reposPerPage - reposPerPage);
    }

    return {
      getAllRepos,
      loading,
      displayedRepos,
      setNewPageHandler,
      reposPerPage,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: gray;
  margin-bottom: 1em;
}
.loading {
  height: 100vh;
  text-align: center;
  font-size: large;
}

button {
  background-color: #3e54ac;
  border: none;
  color: #ecf2ff;
  border-radius: 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.home-btn {
  padding: 7px 16px;
  margin: 1rem;
}
</style>
