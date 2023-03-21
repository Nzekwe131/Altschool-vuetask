<template>
  <div class=" pagination-card container">


    <div class="pagination-icons">

      <div class="user-pagination__buttons">

      <p class="user-pagination__icons--paragraph"> page {{ page }} of {{ total_pages }}</p> 
        <button
        @click="prevHandler"
        class="icons--next"
        :class="{ not__allowed: prevIconHandler }"
      >Prev</button>

      <button v-for="each in total_pages" :key="each" @click="emit(each)" >
        {{ each }}
      </button>

      <button
        class="icon-arrow-right"
        @click="nextHandler"
        :class="[
          'user-pagination__icons--prev',
          { not__allowed: nextIconHandler },
        ]"
      >Next</button>
    </div>

 
    </div>


  </div>
</template>
<script>
export default {
  name: "ReposPagination",
  props: ["totalRepos", "reposPerPage"],
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    total_pages() {
      return Math.ceil(this.totalRepos / this.reposPerPage);
    },

    prevIconHandler() {
      return this.page === 1;
    },
    nextIconHandler() {
      return this.page === this.total_pages;
    },
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    prevHandler() {
      if (this.page === 1) return;
      this.setPage(this.page - 1);
      this.$emit("setNewPageNumber", this.page );
    },
    nextHandler() {
      if (this.page === this.total_pages) return;
      this.setPage(this.page + 1);
      this.$emit("setNewPageNumber", this.page );
    }, 
    emit(each) {
      this.$emit("setNewPageNumber", each);
      this.setPage(each);
    },
  },
};
</script>


<style>
.pagination-card{
  display: flex;
 margin-bottom: 2rem;
  justify-content: center;
  align-content: center;
  align-items: center;

}

.not__allowed{
  cursor: not-allowed !important;
}


button {
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .pagination-card {
    padding: 0px !important;
    margin-top: 0px !important;
  }
}



</style>