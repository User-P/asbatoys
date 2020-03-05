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
                    <td>@{{category.image}}</td>
                    <td width="10px">
                        <a href="" class="btn btn-warning btn-sm">Editar</a>
                    </td>
                    <td width="10px">
                        <a href="" class="btn btn-danger btn-sm"
                            v-on:click.prevent="deleteCategory(category)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        @include('../categories/create')
    </div>
</div>
@endsection
