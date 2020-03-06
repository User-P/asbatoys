@extends('../layout/app')

@section('content')

<div id="crud" class="row">
    <div class="col-12">
        <h1>CRUD</h1>
    </div>
    <div class="col-sm-7">
        <a href="#" class="btn btn-primary float-right" data-toggle='modal' data-target='#create'>Nueva Categoria</a>
        <table class="table table-hover table-sprite">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th colspan="2">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories">
                    <td>@{{category.name}}</td>
                    <td>
                        <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
                            width="100px" height="100px">
                    </td>
                    <td width="10px">
                        <a href="" class="btn btn-warning btn-sm" v-on:click.prevent="editCategory(category)">Editar</a>
                    </td>
                    <td width=" 10px">
                        <a href="" class="btn btn-danger btn-sm"
                            v-on:click.prevent="deleteCategory(category)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        @include('../categories/create')
        @include('../categories/edit')
    </div>
</div>
@endsection
