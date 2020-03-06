new Vue({
    el: "#crud",
    created: function() {
        this.getCategories();
    },
    data: {
        categories: [],
        nameCategory: "",
        imageCategory: "",
        fillCategory: { id: "", name: "", image: "" },
        errors: [],
        imagen: ""
    },
    methods: {
        getCategories: function() {
            var url = "categories";
            axios.get(url).then(response => {
                this.categories = response.data;
            });
        },
        editCategory: function(category) {
            this.fillCategory.id = category.id;
            this.fillCategory.name = category.name;
            this.fillCategory.image = category.image;
            $("#edit").modal("show");
        },
        updateCategory: function(id) {
            var url = "categories/" + id;
            axios
                .put(url, this.fillCategory)
                .then(response => {
                    this.getCategories();
                    this.fillCategory = { id: "", name: "", image: "" };
                    this.errors = [];
                    $("#edit").modal("hide");
                    toastr.success("Categoria Actualizada con exito");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        deleteCategory: function(category) {
            var url = "categories/" + category.id;
            axios.delete(url).then(response => {
                this.getCategories();
                toastr.success("Eliminado correctamente");
            });
        },
        createCategory: function() {
            var url = "categories";
            axios
                .post(url, {
                    name: this.nameCategory,
                    image: this.imageCategory
                })
                .then(response => {
                    this.getCategories();
                    this.nameCategory = " ";
                    this.imageCategory = " ";
                    this.errors = [];
                    $("#create").modal("hide");
                    toastr.success("Nueva categoria agregada.");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        }
    }
});
