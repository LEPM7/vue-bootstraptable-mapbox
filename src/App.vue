<template>
    <div id="app">
        <div class='wrapper'>
            <h1>Auditoria</h1>
            <h3>{{`${client.name || ''} ${client.surname || ''}` }}</h3>
            <b-card>
                <h3><font-awesome-icon icon="user" style="font-size:0.8em" />&nbsp;Informacion</h3>
                <b-card-body>
                <b-table :items="items" :fields="fields" >
                    <template slot="old" slot-scope="data">
                        <div v-if="data.item.type === 'community'">
                            <strong>Comunidad</strong>:<span>{{data.item.old.community}}</span><br/>
                            <strong>Municipio</strong>:<span>{{data.item.old.area_level_2}}</span><br/>
                            <strong>Departamento</strong>:<span>{{data.item.old.area_level_1}}</span><br/>
                        </div>
                        <div v-if="data.item.type === 'phone'">
                            {{data.item.old.phone}}
                        </div>
                        <div v-if="data.item.type === 'GPS'">
                            <strong>Latitud</strong>:<span>{{data.item.old.latitude}}</span><br>
                            <strong>Longitud</strong>:<span>{{data.item.old.longitude}}</span><br>
                            <strong>Altitud</strong>:<span>{{data.item.old.altitude}}</span><br>
                            <strong>Precision</strong>:<span>{{data.item.old.accuracy}}</span><br>
                            <strong>Altitud precision</strong>:<span>{{data.item.old.alt_accuracy}}</span><br>
                        </div>
                    </template>
                    <template slot="new" slot-scope="data">
                        <div v-if="data.item.type === 'community'">
                            <strong>Comunidad</strong>:<span>{{data.item.new.community}}</span><br/>
                            <strong>Municipio</strong>:<span>{{data.item.new.area_level_2}}</span><br/>
                            <strong>Departamento</strong>:<span>{{data.item.new.area_level_1}}</span><br/>
                        </div>
                        <div v-if="data.item.type === 'phone'">
                            {{data.item.new.phone}}
                        </div>
                        <div v-if="data.item.type === 'GPS'">
                            <strong>Latitud</strong>:<span>{{data.item.new.latitude}}</span><br>
                            <strong>Longitud</strong>:<span>{{data.item.new.longitude}}</span><br>
                            <strong>Altitud</strong>:<span>{{data.item.new.altitude}}</span><br>
                            <strong>Precision</strong>:<span>{{data.item.new.accuracy}}</span><br>
                            <strong>Altitud precision</strong>:<span>{{data.item.new.alt_accuracy}}</span><br>
                        </div>
                    </template>
                    <template slot="accepted" slot-scope="data">
                        <button style="padding:5px 15px;background:rgb(0,164,0);color:white;font-size:1em;outline:none;border:0;border-radius:5px;"
                                v-if="items[data.index].accepted"
                                @click="items[data.index].accepted = !items[data.index].accepted">
                            <font-awesome-icon  :icon="['far', 'check-square']"/>
                        </button>
                        <button style="padding:5px 15px;background:none;font-size:1em;outline:none;border:0;;border-radius:5px;"
                                v-if="!items[data.index].accepted"
                                @click="items[data.index].accepted = !items[data.index].accepted">
                            <font-awesome-icon :icon="['far', 'square']" />
                        </button>
                    </template>
                </b-table>
                </b-card-body>
            </b-card>
            <b-card>
                <h3><font-awesome-icon icon="map-marker-alt" style="font-size:0.8em" />&nbsp;Ubicacion</h3>
                <b-card-body>
                    <div id='map' style="height:400px"></div>
                </b-card-body>
            </b-card>
            <b-card>
                <h3><font-awesome-icon icon="image" style="font-size:0.8em" />&nbsp;Fotografias</h3>
                <b-card-body>
                    <b-table :items="mediaItems" :fields="fields" >
                        <template slot="old" slot-scope="data">
                            <span v-for="picture of data.item.old" style="margin:10px">
                                <b-button v-for="(value, key) in picture"
                                          @click="openModal(value)"
                                          variant="default"
                                          style="font-size: 1em">
                                    <font-awesome-icon icon="expand-arrows-alt"/>&nbsp;{{key}}
                                </b-button>
                            </span>
                        </template>
                        <template slot="new" slot-scope="data">
                            <span v-for="picture of data.item.new" style="margin:10px">
                                <b-button v-for="(value, key) in picture" variant="default" style="font-size: 1em"
                                          @click="openModal(value)">
                                    <font-awesome-icon icon="expand-arrows-alt"/>&nbsp;{{key}}
                                </b-button>
                            </span>
                        </template>
                        <template slot="accepted" slot-scope="data">
                            <button style="padding:5px 15px;background:rgb(0,164,0);color:white;font-size:1em;outline:none;border:0;border-radius:5px;"
                                    v-if="mediaItems[data.index].accepted"
                                    @click="mediaItems[data.index].accepted = !mediaItems[data.index].accepted">
                                <font-awesome-icon  :icon="['far', 'check-square']"/>
                            </button>
                            <button style="padding:5px 15px;background:none;font-size:1em;outline:none;border:0;;border-radius:5px;"
                                    v-if="!mediaItems[data.index].accepted"
                                    @click="mediaItems[data.index].accepted = !mediaItems[data.index].accepted">
                                <font-awesome-icon :icon="['far', 'square']" />
                            </button>
                        </template>
                    </b-table>
                </b-card-body>
            </b-card>
            <div style="text-align: right">
                <b-button variant="warning" style="padding: 10px;margin: 5px;">Cancelar</b-button>
                <b-button variant="success" style="padding: 10px;margin: 5px;" v-on:click="save">Procesar</b-button>
            </div>
        </div>
        <b-modal ref="image-modal" size="lg">
            <img :src="modalImageUrl" style="width: 100%; height: auto">
        </b-modal>
    </div>
</template>
<script src="./app.js"></script>
<style src="./app.css"></style>
