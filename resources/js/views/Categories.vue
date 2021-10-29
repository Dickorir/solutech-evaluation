<template>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Categories</li>
            </ol>

            <div class="row">
                <div class="col-xl-12">
                    <div class="card mb-4">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                            Categories Management
                            </span>
                            <button class="btn btn-primary ml-auto" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span>Create New</button>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Namde</td>
                                    <td>Image</td>
                                    <td>Action</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Shiirt</td>
                                    <td>Image</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span> </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
                <div class="d-block">
                    <form v-on:submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Email Name</label>
                            <input type="text" class="form-control" id="name" v-model="categoryData.name" placeholder="Category Name" />
                        </div>
                        <div class="form-group">
                            <label for="image">Image</label>
                            <div v-if="categoryData.image.name">
                                <img src="" ref="newCategoryImageDisplay" alt="" class="w-150px">
                            </div>
                            <input type="file" class="form-control w-150px" id="image" ref="newCategoryImage" v-on:change="attachImage" />
                        </div>
                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                            <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span>Save</button>
                        </div>
                    </form>
                </div>
            </b-modal>
        </div>
</template>
<script>
    import * as categoryService from '../services/category_service';
    export default {
        name: 'category',
        data(){
            return {
                categoryData: {
                    name: '',
                    image: ''
                }
            }
        },
        methods: {
            attachImage() {
                //  to use file reader
                this.categoryData.image = this.$refs.newCategoryImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.newCategoryImageDisplay.src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.categoryData.image);
            },
            showNewCategoryModal() {
                this.$refs.newCategoryModal.show();
            },
            hideNewCategoryModal() {
                this.$refs.newCategoryModal.hide();
            },
            createCategory: async function() {
                let formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);

                try {
                    const response = await categoryService.createCategory(formData);
                    console.log(response);
                } catch (e) {
                    console.log('some error');
                }
            }
        }
    }
</script>
