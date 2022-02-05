ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([459686.149596, 2845473.714378, 460521.511580, 2845893.800443]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tombes_1 = new ol.format.GeoJSON();
var features_tombes_1 = format_tombes_1.readFeatures(json_tombes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_tombes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tombes_1.addFeatures(features_tombes_1);
var lyr_tombes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tombes_1, 
                style: style_tombes_1,
                interactive: true,
                title: '<img src="styles/legend/tombes_1.png" /> tombes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_tombes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_tombes_1];
lyr_tombes_1.set('fieldAliases', {'TT n°': 'TT n°', 'Propriétaire de la tombe': 'Propriétaire de la tombe', 'Titre(s) du propriétaire': 'Titre(s) du propriétaire', 'Datation': 'Datation', 'En cours de publication par': 'En cours de publication par', 'Publication (s)': 'Publication (s)', 'field_7': 'field_7', 'Est (WGS84 UTM N36) (m)': 'Est (WGS84 UTM N36) (m)', 'Nord (WGS84 UTM N36) (m)': 'Nord (WGS84 UTM N36) (m)', });
lyr_tombes_1.set('fieldImages', {'TT n°': '', 'Propriétaire de la tombe': '', 'Titre(s) du propriétaire': '', 'Datation': '', 'En cours de publication par': '', 'Publication (s)': '', 'field_7': '', 'Est (WGS84 UTM N36) (m)': '', 'Nord (WGS84 UTM N36) (m)': '', });
lyr_tombes_1.set('fieldLabels', {'TT n°': 'no label', 'Propriétaire de la tombe': 'no label', 'Titre(s) du propriétaire': 'no label', 'Datation': 'no label', 'En cours de publication par': 'no label', 'Publication (s)': 'no label', 'field_7': 'no label', 'Est (WGS84 UTM N36) (m)': 'no label', 'Nord (WGS84 UTM N36) (m)': 'no label', });
lyr_tombes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});