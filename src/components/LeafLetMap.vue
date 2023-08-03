<script setup>

    import {ref, onMounted, watch} from 'vue'
    import L from 'leaflet'
    import 'leaflet/dist/leaflet.css'
    
    // const lat = ref('')
    // const lon = ref('')
    // const dataLoaded = ref(false)
    const mapContainer = ref(null)

    const address = [
        {
            'houseName': 'BUAGSONG House sample 1',
            'coord': [10.250984, 123.939499]
        },
        {
            'houseName': 'ALEGRIA House sample 2',
            'coord': [10.257239, 123.959788]
        },
        {
            'houseName': 'BANG BANG House sample 3',
            'coord': [10.259351, 123.942876]
        },
        {
            'houseName': 'DAPITAN House sample 4',
            'coord': [10.266107, 123.949229]
        },
        {
            'houseName': 'GABI House sample 5',
            'coord': [10.263067, 123.962449]
        }
        
    ]

    onMounted(async() => {

        // navigator.geolocation.getCurrentPosition(pos => {
        //     console.log(pos)
        //     lat.value = pos.coords.latitude
        //     lon.value = pos.coords.longitude
        //     dataLoaded.value = true
        // })

        // watch(dataLoaded, () => {
        //     generateMap()
        // })

        generateMap()

    })

    function generateMap() {
        const map = L.map(mapContainer.value).setView([10.252763, 123.949394], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
        // const marker = L.marker([10.250984, 123.939499], {icon: greenIcon}).addTo(map)
        // marker.bindPopup("<b> Hello Giatay! </b> <br> I'm a popup!")
        // map.on('click', onMapClick)

        address.forEach(place => {
            const marker = L.marker([place.coord[0], place.coord[1]], {icon: markerIcon}).addTo(map)
            marker.bindPopup(`<b> Hello from ${place.houseName}! </b> <br> I'm a popup!`)
            map.on('click', onMapClick)
        });

    }

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng)
    }

    var markerIcon = L.icon({
        iconUrl: 'https://img.icons8.com/color/96/marker--v1.png',
        iconSize:     [30, 30], // size of the icon
    });

</script>

<template>

    <div class="leaflet-container" ref="mapContainer"></div>
</template>

<style scoped>

    .leaflet-container {
        margin-top: 50px;
        margin-left: 10%;
        height: 500px;
        width: 80vw;
    }

</style>