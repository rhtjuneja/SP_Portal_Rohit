var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_LST_SP_dec2024_Feb2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_SP_dec2024_Feb2025<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_0.png" /> <= 18.1178<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_1.png" /> 18.1178 - 23.0445<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_2.png" /> 23.0445 - 27.9711<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_3.png" /> 27.9711 - 32.8978<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_4.png" /> 32.8978 - 37.8244<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_5.png" /> 37.8244 - 42.7511<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_6.png" /> 42.7511 - 47.6777<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_1_7.png" /> > 47.6777<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_SP_dec2024_Feb2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var format_All_Favelas_SP_2022_2 = new ol.format.GeoJSON();
var features_All_Favelas_SP_2022_2 = format_All_Favelas_SP_2022_2.readFeatures(json_All_Favelas_SP_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Favelas_SP_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_Favelas_SP_2022_2.addFeatures(features_All_Favelas_SP_2022_2);
var lyr_All_Favelas_SP_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_Favelas_SP_2022_2, 
                style: style_All_Favelas_SP_2022_2,
                popuplayertitle: 'All_Favelas_SP_2022',
                interactive: true,
                title: '<img src="styles/legend/All_Favelas_SP_2022_2.png" /> All_Favelas_SP_2022'
            });
var format_SP_Municipality_Boundary_3 = new ol.format.GeoJSON();
var features_SP_Municipality_Boundary_3 = format_SP_Municipality_Boundary_3.readFeatures(json_SP_Municipality_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_Municipality_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_Municipality_Boundary_3.addFeatures(features_SP_Municipality_Boundary_3);
var lyr_SP_Municipality_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_Municipality_Boundary_3, 
                style: style_SP_Municipality_Boundary_3,
                popuplayertitle: 'SP_Municipality_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SP_Municipality_Boundary_3.png" /> SP_Municipality_Boundary'
            });
var group_AdministrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_SP_Municipality_Boundary_3,],
                                fold: 'open',
                                title: 'Administrative Boundaries'});
var group_Favelas = new ol.layer.Group({
                                layers: [lyr_All_Favelas_SP_2022_2,],
                                fold: 'open',
                                title: 'Favelas'});
var group_UrbanHeatOtherLandParameters = new ol.layer.Group({
                                layers: [lyr_LST_SP_dec2024_Feb2025_1,],
                                fold: 'open',
                                title: 'Urban Heat & Other Land Parameters'});
var group_LandUse = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Land Use'});
var group_Socio_Economic = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Socio_Economic'});
var group_Green_Spaces__Natural_Resources = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Green_Spaces_&_Natural_Resources'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,],
                                fold: 'open',
                                title: 'Base Map'});

lyr_GoogleMaps_0.setVisible(true);lyr_LST_SP_dec2024_Feb2025_1.setVisible(true);lyr_All_Favelas_SP_2022_2.setVisible(true);lyr_SP_Municipality_Boundary_3.setVisible(true);
var layersList = [group_BaseMap,group_UrbanHeatOtherLandParameters,group_Favelas,group_AdministrativeBoundaries];
lyr_All_Favelas_SP_2022_2.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'cd_uf': 'cd_uf', 'nm_uf': 'nm_uf', 'sigla_uf': 'sigla_uf', 'cd_mun': 'cd_mun', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'Density': 'Density', 'LST': 'LST', });
lyr_SP_Municipality_Boundary_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_All_Favelas_SP_2022_2.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'cd_uf': 'Hidden', 'nm_uf': 'TextEdit', 'sigla_uf': 'TextEdit', 'cd_mun': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'Density': 'TextEdit', 'LST': 'TextEdit', });
lyr_SP_Municipality_Boundary_3.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'Hidden', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_All_Favelas_SP_2022_2.set('fieldLabels', {'nm_fcu': 'header label - visible with data', 'nm_uf': 'no label', 'sigla_uf': 'no label', 'cd_mun': 'no label', 'Pop_2022': 'header label - visible with data', 'Area': 'header label - visible with data', 'Density': 'header label - visible with data', 'LST': 'header label - visible with data', });
lyr_SP_Municipality_Boundary_3.set('fieldLabels', {'NM_MUN': 'no label', 'NM_REGIAO': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_SP_Municipality_Boundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});