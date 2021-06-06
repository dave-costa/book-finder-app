<template>
    <div>
    <div class="container">
        <section class="section" style="text-align: center;">
            <h1 class="title has-text-primary">BOOK FINDER</h1>
            <input @keyup.enter="search" v-model="name" class="input is-primary is-medium is-rounded " type="text" placeholder="Set key">
            <button @click="search" class="button is-primary m-4">Search Book</button>
        </section>
        <section class="section">
            <div v-if="books" class="columns is-multiline is-desktop" >
                <div 
                    v-for="book in books"
                    :key="book.id"
                    class="column is-3"
                >
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img :src=book.volumeInfo.imageLinks.thumbnail>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">                            
                            <div class="media-content">
                                <p class="title is-4">{{book.volumeInfo.title}}</p>               
                            </div>
                            </div>
                            <div class="content">
                                <div v-if="book.volumeInfo.authors">
                                    <p><strong>Author: </strong> <span v-for="(author, index) in book.volumeInfo.authors" :key="index">{{author}}</span></p>
                                    <p><strong>Publisher: </strong>{{book.volumeInfo.publisher}}</p>
                                </div>
                                <div v-else>
                                    <p><strong>Author: </strong> Unknown</p>
                                    <p><strong>Publisher: </strong> Unknown</p>
                                </div>
                            <br>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <p v-else style="text-align: center"> <strong>No search has been entered...</strong></p>
        </section>      
    </div>   
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed: {
        ...mapState('finder', ['books'])
    },
    data(){
        return {
            name: '',        
        }
    },
    methods: {
       ...mapActions('finder', ['getData']),        
       search: async function() {
           await this.getData(this.name)
       }
   }
}
</script>