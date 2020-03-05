new Vue({
    el: "#crud",
    created: function() {
        this.getCategories();
    },
    data: {
        categories: [],
        nameCategory: "",
        errors: []
    },
    methods: {
        getCategories: function() {
            var url = "categories";
            axios.get(url).then(response => {
                this.categories = response.data;
            });
        },
        deleteCategory: function(category) {
            var url = "categories/" + category.id;
            axios.delete(url).then(response => {
                alert("registro eliminado");
                this.getCategories();
            });
        },
        createCategory: function() {
            var url = "categories";
            axios
                .post(url, {
                    name: this.nameCategory
                })
                .then(response => {
                    this.getCategories();
                    this.nameCategory = " ";
                    $("#create").modal("hide");
                    this.errors = [];
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        }
    }
});
