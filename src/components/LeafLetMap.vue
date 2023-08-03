<script setup>

    import {ref, onMounted, watch} from 'vue'
    import L from 'leaflet'
    import 'leaflet/dist/leaflet.css'
    
    const lat = ref('')
    const lon = ref('')
    const dataLoaded = ref(false)
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

        navigator.geolocation.getCurrentPosition(pos => {
            console.log(pos)
            lat.value = pos.coords.latitude
            lon.value = pos.coords.longitude
            dataLoaded.value = true
        })

        watch(dataLoaded, () => {
            generateMap()
        })

    })

    function generateMap() {
        const map = L.map(mapContainer.value).setView([lat.value, lon.value], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
        // const marker = L.marker([10.250984, 123.939499], {icon: greenIcon}).addTo(map)
        // marker.bindPopup("<b> Hello Giatay! </b> <br> I'm a popup!")
        // map.on('click', onMapClick)

        address.forEach(place => {
            const marker = L.marker([place.coord[0], place.coord[1]], {icon: greenIcon}).addTo(map)
            marker.bindPopup(`<b> Hello from ${place.houseName}! </b> <br> I'm a popup!`)
            map.on('click', onMapClick)
        });

    }

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng)
    }

    var greenIcon = L.icon({
        iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
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