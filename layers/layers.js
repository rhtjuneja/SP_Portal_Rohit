var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Praca_Largo_2 = new ol.format.GeoJSON();
var features_Praca_Largo_2 = format_Praca_Largo_2.readFeatures(json_Praca_Largo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Praca_Largo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praca_Largo_2.addFeatures(features_Praca_Largo_2);
var lyr_Praca_Largo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praca_Largo_2, 
                style: style_Praca_Largo_2,
                popuplayertitle: 'Praca_Largo',
                interactive: true,
                title: '<img src="styles/legend/Praca_Largo_2.png" /> Praca_Largo'
            });
var format_Resevamataatlantica_3 = new ol.format.GeoJSON();
var features_Resevamataatlantica_3 = format_Resevamataatlantica_3.readFeatures(json_Resevamataatlantica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resevamataatlantica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resevamataatlantica_3.addFeatures(features_Resevamataatlantica_3);
var lyr_Resevamataatlantica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resevamataatlantica_3, 
                style: style_Resevamataatlantica_3,
                popuplayertitle: 'Reseva mata atlantica',
                interactive: true,
                title: '<img src="styles/legend/Resevamataatlantica_3.png" /> Reseva mata atlantica'
            });
var format_Area_Protecao_4 = new ol.format.GeoJSON();
var features_Area_Protecao_4 = format_Area_Protecao_4.readFeatures(json_Area_Protecao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Protecao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Protecao_4.addFeatures(features_Area_Protecao_4);
var lyr_Area_Protecao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_Protecao_4, 
                style: style_Area_Protecao_4,
                popuplayertitle: 'Area_Protecao',
                interactive: true,
                title: '<img src="styles/legend/Area_Protecao_4.png" /> Area_Protecao'
            });
var format_Zoneamento_Geoambiental_5 = new ol.format.GeoJSON();
var features_Zoneamento_Geoambiental_5 = format_Zoneamento_Geoambiental_5.readFeatures(json_Zoneamento_Geoambiental_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneamento_Geoambiental_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento_Geoambiental_5.addFeatures(features_Zoneamento_Geoambiental_5);
var lyr_Zoneamento_Geoambiental_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento_Geoambiental_5, 
                style: style_Zoneamento_Geoambiental_5,
                popuplayertitle: 'Zoneamento_Geoambiental',
                interactive: true,
                title: '<img src="styles/legend/Zoneamento_Geoambiental_5.png" /> Zoneamento_Geoambiental'
            });
var format_Cadparcs_Parque_Unidade_Conservacao_6 = new ol.format.GeoJSON();
var features_Cadparcs_Parque_Unidade_Conservacao_6 = format_Cadparcs_Parque_Unidade_Conservacao_6.readFeatures(json_Cadparcs_Parque_Unidade_Conservacao_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadparcs_Parque_Unidade_Conservacao_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadparcs_Parque_Unidade_Conservacao_6.addFeatures(features_Cadparcs_Parque_Unidade_Conservacao_6);
var lyr_Cadparcs_Parque_Unidade_Conservacao_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadparcs_Parque_Unidade_Conservacao_6, 
                style: style_Cadparcs_Parque_Unidade_Conservacao_6,
                popuplayertitle: 'Cadparcs_Parque_Unidade_Conservacao',
                interactive: true,
                title: '<img src="styles/legend/Cadparcs_Parque_Unidade_Conservacao_6.png" /> Cadparcs_Parque_Unidade_Conservacao'
            });
var format_corredor_ecologico_7 = new ol.format.GeoJSON();
var features_corredor_ecologico_7 = format_corredor_ecologico_7.readFeatures(json_corredor_ecologico_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corredor_ecologico_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_corredor_ecologico_7.addFeatures(features_corredor_ecologico_7);
var lyr_corredor_ecologico_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_corredor_ecologico_7, 
                style: style_corredor_ecologico_7,
                popuplayertitle: 'corredor_ecologico',
                interactive: true,
                title: '<img src="styles/legend/corredor_ecologico_7.png" /> corredor_ecologico'
            });
var format_Density_ppHa_2022_8 = new ol.format.GeoJSON();
var features_Density_ppHa_2022_8 = format_Density_ppHa_2022_8.readFeatures(json_Density_ppHa_2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Density_ppHa_2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Density_ppHa_2022_8.addFeatures(features_Density_ppHa_2022_8);
var lyr_Density_ppHa_2022_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Density_ppHa_2022_8, 
                style: style_Density_ppHa_2022_8,
                popuplayertitle: 'Density_ppHa_2022',
                interactive: true,
    title: 'Density_ppHa_2022<br />\
    <img src="styles/legend/Density_ppHa_2022_8_0.png" /> 0 - 65<br />\
    <img src="styles/legend/Density_ppHa_2022_8_1.png" /> 65 - 115<br />\
    <img src="styles/legend/Density_ppHa_2022_8_2.png" /> 115 - 156<br />\
    <img src="styles/legend/Density_ppHa_2022_8_3.png" /> 156 - 208<br />\
    <img src="styles/legend/Density_ppHa_2022_8_4.png" /> 208 - 301<br />\
    <img src="styles/legend/Density_ppHa_2022_8_5.png" /> 301 - 498<br />\
    <img src="styles/legend/Density_ppHa_2022_8_6.png" /> 498 - 11632<br />' });
var format_Density_ppHa_2010_9 = new ol.format.GeoJSON();
var features_Density_ppHa_2010_9 = format_Density_ppHa_2010_9.readFeatures(json_Density_ppHa_2010_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Density_ppHa_2010_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Density_ppHa_2010_9.addFeatures(features_Density_ppHa_2010_9);
var lyr_Density_ppHa_2010_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Density_ppHa_2010_9, 
                style: style_Density_ppHa_2010_9,
                popuplayertitle: 'Density_ppHa_2010',
                interactive: true,
    title: 'Density_ppHa_2010<br />\
    <img src="styles/legend/Density_ppHa_2010_9_0.png" /> 0 - 83<br />\
    <img src="styles/legend/Density_ppHa_2010_9_1.png" /> 83 - 141<br />\
    <img src="styles/legend/Density_ppHa_2010_9_2.png" /> 141 - 202<br />\
    <img src="styles/legend/Density_ppHa_2010_9_3.png" /> 202 - 342<br />\
    <img src="styles/legend/Density_ppHa_2010_9_4.png" /> 342 - 30346<br />' });
var format_water_bodies_10 = new ol.format.GeoJSON();
var features_water_bodies_10 = format_water_bodies_10.readFeatures(json_water_bodies_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_bodies_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_bodies_10.addFeatures(features_water_bodies_10);
var lyr_water_bodies_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_bodies_10, 
                style: style_water_bodies_10,
                popuplayertitle: 'water_bodies',
                interactive: true,
                title: '<img src="styles/legend/water_bodies_10.png" /> water_bodies'
            });
var format_USU_SP_Misto_11 = new ol.format.GeoJSON();
var features_USU_SP_Misto_11 = format_USU_SP_Misto_11.readFeatures(json_USU_SP_Misto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USU_SP_Misto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USU_SP_Misto_11.addFeatures(features_USU_SP_Misto_11);
var lyr_USU_SP_Misto_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USU_SP_Misto_11, 
                style: style_USU_SP_Misto_11,
                popuplayertitle: 'USU_SP_Misto',
                interactive: true,
                title: '<img src="styles/legend/USU_SP_Misto_11.png" /> USU_SP_Misto'
            });
var format_USO_SP_Industrial_12 = new ol.format.GeoJSON();
var features_USO_SP_Industrial_12 = format_USO_SP_Industrial_12.readFeatures(json_USO_SP_Industrial_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USO_SP_Industrial_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USO_SP_Industrial_12.addFeatures(features_USO_SP_Industrial_12);
var lyr_USO_SP_Industrial_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USO_SP_Industrial_12, 
                style: style_USO_SP_Industrial_12,
                popuplayertitle: 'USO_SP_Industrial',
                interactive: true,
                title: '<img src="styles/legend/USO_SP_Industrial_12.png" /> USO_SP_Industrial'
            });
var format_USO_SP_Equipmento_Social_13 = new ol.format.GeoJSON();
var features_USO_SP_Equipmento_Social_13 = format_USO_SP_Equipmento_Social_13.readFeatures(json_USO_SP_Equipmento_Social_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USO_SP_Equipmento_Social_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USO_SP_Equipmento_Social_13.addFeatures(features_USO_SP_Equipmento_Social_13);
var lyr_USO_SP_Equipmento_Social_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USO_SP_Equipmento_Social_13, 
                style: style_USO_SP_Equipmento_Social_13,
                popuplayertitle: 'USO_SP_Equipmento_Social',
                interactive: true,
                title: '<img src="styles/legend/USO_SP_Equipmento_Social_13.png" /> USO_SP_Equipmento_Social'
            });
var format_USO_SP_Equipmento_De_Infrastructura_14 = new ol.format.GeoJSON();
var features_USO_SP_Equipmento_De_Infrastructura_14 = format_USO_SP_Equipmento_De_Infrastructura_14.readFeatures(json_USO_SP_Equipmento_De_Infrastructura_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USO_SP_Equipmento_De_Infrastructura_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USO_SP_Equipmento_De_Infrastructura_14.addFeatures(features_USO_SP_Equipmento_De_Infrastructura_14);
var lyr_USO_SP_Equipmento_De_Infrastructura_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USO_SP_Equipmento_De_Infrastructura_14, 
                style: style_USO_SP_Equipmento_De_Infrastructura_14,
                popuplayertitle: 'USO_SP_Equipmento_De_Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/USO_SP_Equipmento_De_Infrastructura_14.png" /> USO_SP_Equipmento_De_Infrastructura'
            });
var format_USO_SP_Commercial_15 = new ol.format.GeoJSON();
var features_USO_SP_Commercial_15 = format_USO_SP_Commercial_15.readFeatures(json_USO_SP_Commercial_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USO_SP_Commercial_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USO_SP_Commercial_15.addFeatures(features_USO_SP_Commercial_15);
var lyr_USO_SP_Commercial_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USO_SP_Commercial_15, 
                style: style_USO_SP_Commercial_15,
                popuplayertitle: 'USO_SP_Commercial',
                interactive: true,
                title: '<img src="styles/legend/USO_SP_Commercial_15.png" /> USO_SP_Commercial'
            });
var format_major_roads_16 = new ol.format.GeoJSON();
var features_major_roads_16 = format_major_roads_16.readFeatures(json_major_roads_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_major_roads_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_roads_16.addFeatures(features_major_roads_16);
var lyr_major_roads_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_major_roads_16, 
                style: style_major_roads_16,
                popuplayertitle: 'major_roads',
                interactive: true,
                title: '<img src="styles/legend/major_roads_16.png" /> major_roads'
            });
var lyr_fabdem_hillshade_SP_Clip_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'fabdem_hillshade_SP_Clip<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_0.png" /> <= 164<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_1.png" /> 164 - 175<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_2.png" /> 175 - 180<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_3.png" /> 180 - 181<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_4.png" /> 181 - 186<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_5.png" /> 186 - 197<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_17_6.png" /> > 197<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/fabdem_hillshade_SP_Clip_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754450.000000, -5161320.000000, -2675160.000000]
        })
    });
var lyr_ndbi_SP_clip_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ndbi_SP_clip<br />\
    <img src="styles/legend/ndbi_SP_clip_18_0.png" /> <= -0.3833<br />\
    <img src="styles/legend/ndbi_SP_clip_18_1.png" /> -0.3833 - -0.3058<br />\
    <img src="styles/legend/ndbi_SP_clip_18_2.png" /> -0.3058 - -0.1072<br />\
    <img src="styles/legend/ndbi_SP_clip_18_3.png" /> -0.1072 - 0.0283<br />\
    <img src="styles/legend/ndbi_SP_clip_18_4.png" /> 0.0283 - 0.1077<br />\
    <img src="styles/legend/ndbi_SP_clip_18_5.png" /> > 0.1077<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndbi_SP_clip_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var lyr_ndvi_SP_clip_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ndvi_SP_clip<br />\
    <img src="styles/legend/ndvi_SP_clip_19_0.png" /> <= -0.5961<br />\
    <img src="styles/legend/ndvi_SP_clip_19_1.png" /> -0.5961 - -0.1974<br />\
    <img src="styles/legend/ndvi_SP_clip_19_2.png" /> -0.1974 - 0.2013<br />\
    <img src="styles/legend/ndvi_SP_clip_19_3.png" /> 0.2013 - 0.5999<br />\
    <img src="styles/legend/ndvi_SP_clip_19_4.png" /> > 0.5999<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndvi_SP_clip_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532619, -5161320.000000, -2675162.793672]
        })
    });
var lyr_lst_Night_SP_clip_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'lst_Night_SP_clip<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_0.png" /> <= 12.0400<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_1.png" /> 12.0400 - 13.4700<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_2.png" /> 13.4700 - 14.9000<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_3.png" /> 14.9000 - 16.3300<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_4.png" /> 16.3300 - 17.7600<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_5.png" /> 17.7600 - 19.1900<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_6.png" /> 19.1900 - 20.6200<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_7.png" /> 20.6200 - 22.0500<br />\
    <img src="styles/legend/lst_Night_SP_clip_20_8.png" /> > 22.0500<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/lst_Night_SP_clip_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var lyr_LST_SP_dec2024_Feb2025_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_SP_dec2024_Feb2025<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_0.png" /> <= 18.1178<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_1.png" /> 18.1178 - 23.0445<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_2.png" /> 23.0445 - 27.9711<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_3.png" /> 27.9711 - 32.8978<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_4.png" /> 32.8978 - 37.8244<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_5.png" /> 37.8244 - 42.7511<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_6.png" /> 42.7511 - 47.6777<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_21_7.png" /> > 47.6777<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_SP_dec2024_Feb2025_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var format_All_Favelas_SP_2022_22 = new ol.format.GeoJSON();
var features_All_Favelas_SP_2022_22 = format_All_Favelas_SP_2022_22.readFeatures(json_All_Favelas_SP_2022_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Favelas_SP_2022_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_Favelas_SP_2022_22.addFeatures(features_All_Favelas_SP_2022_22);
var lyr_All_Favelas_SP_2022_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_Favelas_SP_2022_22, 
                style: style_All_Favelas_SP_2022_22,
                popuplayertitle: 'All_Favelas_SP_2022',
                interactive: true,
                title: '<img src="styles/legend/All_Favelas_SP_2022_22.png" /> All_Favelas_SP_2022'
            });
var format_top_10_coolest_favelas_SP_23 = new ol.format.GeoJSON();
var features_top_10_coolest_favelas_SP_23 = format_top_10_coolest_favelas_SP_23.readFeatures(json_top_10_coolest_favelas_SP_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_top_10_coolest_favelas_SP_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_top_10_coolest_favelas_SP_23.addFeatures(features_top_10_coolest_favelas_SP_23);
var lyr_top_10_coolest_favelas_SP_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_top_10_coolest_favelas_SP_23, 
                style: style_top_10_coolest_favelas_SP_23,
                popuplayertitle: 'top_10_coolest_favelas_SP',
                interactive: true,
                title: '<img src="styles/legend/top_10_coolest_favelas_SP_23.png" /> top_10_coolest_favelas_SP'
            });
var format_top_10_hottest_favelas_SP_24 = new ol.format.GeoJSON();
var features_top_10_hottest_favelas_SP_24 = format_top_10_hottest_favelas_SP_24.readFeatures(json_top_10_hottest_favelas_SP_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_top_10_hottest_favelas_SP_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_top_10_hottest_favelas_SP_24.addFeatures(features_top_10_hottest_favelas_SP_24);
var lyr_top_10_hottest_favelas_SP_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_top_10_hottest_favelas_SP_24, 
                style: style_top_10_hottest_favelas_SP_24,
                popuplayertitle: 'top_10_hottest_favelas_SP',
                interactive: true,
                title: '<img src="styles/legend/top_10_hottest_favelas_SP_24.png" /> top_10_hottest_favelas_SP'
            });
var format_Most_Populated_Favleas_SP_25 = new ol.format.GeoJSON();
var features_Most_Populated_Favleas_SP_25 = format_Most_Populated_Favleas_SP_25.readFeatures(json_Most_Populated_Favleas_SP_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Most_Populated_Favleas_SP_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Most_Populated_Favleas_SP_25.addFeatures(features_Most_Populated_Favleas_SP_25);
var lyr_Most_Populated_Favleas_SP_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Most_Populated_Favleas_SP_25, 
                style: style_Most_Populated_Favleas_SP_25,
                popuplayertitle: 'Most_Populated_Favleas_SP',
                interactive: true,
                title: '<img src="styles/legend/Most_Populated_Favleas_SP_25.png" /> Most_Populated_Favleas_SP'
            });
var format_SP_Municipalities_Boundaries_26 = new ol.format.GeoJSON();
var features_SP_Municipalities_Boundaries_26 = format_SP_Municipalities_Boundaries_26.readFeatures(json_SP_Municipalities_Boundaries_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_Municipalities_Boundaries_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_Municipalities_Boundaries_26.addFeatures(features_SP_Municipalities_Boundaries_26);
var lyr_SP_Municipalities_Boundaries_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_Municipalities_Boundaries_26, 
                style: style_SP_Municipalities_Boundaries_26,
                popuplayertitle: 'SP_Municipalities_Boundaries',
                interactive: true,
                title: 'SP_Municipalities_Boundaries'
            });
var format_Censustracks_SP_2022_27 = new ol.format.GeoJSON();
var features_Censustracks_SP_2022_27 = format_Censustracks_SP_2022_27.readFeatures(json_Censustracks_SP_2022_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Censustracks_SP_2022_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Censustracks_SP_2022_27.addFeatures(features_Censustracks_SP_2022_27);
var lyr_Censustracks_SP_2022_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Censustracks_SP_2022_27, 
                style: style_Censustracks_SP_2022_27,
                popuplayertitle: 'Censustracks_SP_2022',
                interactive: true,
                title: '<img src="styles/legend/Censustracks_SP_2022_27.png" /> Censustracks_SP_2022'
            });
var format_SP_District_Boundaries_28 = new ol.format.GeoJSON();
var features_SP_District_Boundaries_28 = format_SP_District_Boundaries_28.readFeatures(json_SP_District_Boundaries_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_District_Boundaries_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_District_Boundaries_28.addFeatures(features_SP_District_Boundaries_28);
var lyr_SP_District_Boundaries_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_District_Boundaries_28, 
                style: style_SP_District_Boundaries_28,
                popuplayertitle: 'SP_District_Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SP_District_Boundaries_28.png" /> SP_District_Boundaries'
            });
var format_SP_Municipality_Boundary_29 = new ol.format.GeoJSON();
var features_SP_Municipality_Boundary_29 = format_SP_Municipality_Boundary_29.readFeatures(json_SP_Municipality_Boundary_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_Municipality_Boundary_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_Municipality_Boundary_29.addFeatures(features_SP_Municipality_Boundary_29);
var lyr_SP_Municipality_Boundary_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_Municipality_Boundary_29, 
                style: style_SP_Municipality_Boundary_29,
                popuplayertitle: 'SP_Municipality_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SP_Municipality_Boundary_29.png" /> SP_Municipality_Boundary'
            });
var group_AdministrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_SP_Municipalities_Boundaries_26,lyr_Censustracks_SP_2022_27,lyr_SP_District_Boundaries_28,lyr_SP_Municipality_Boundary_29,],
                                fold: 'open',
                                title: 'Administrative Boundaries'});
var group_Favelas = new ol.layer.Group({
                                layers: [lyr_All_Favelas_SP_2022_22,lyr_top_10_coolest_favelas_SP_23,lyr_top_10_hottest_favelas_SP_24,lyr_Most_Populated_Favleas_SP_25,],
                                fold: 'open',
                                title: 'Favelas'});
var group_UrbanHeatOtherLandParameters = new ol.layer.Group({
                                layers: [lyr_fabdem_hillshade_SP_Clip_17,lyr_ndbi_SP_clip_18,lyr_ndvi_SP_clip_19,lyr_lst_Night_SP_clip_20,lyr_LST_SP_dec2024_Feb2025_21,],
                                fold: 'open',
                                title: 'Urban Heat & Other Land Parameters'});
var group_LandUse = new ol.layer.Group({
                                layers: [lyr_water_bodies_10,lyr_USU_SP_Misto_11,lyr_USO_SP_Industrial_12,lyr_USO_SP_Equipmento_Social_13,lyr_USO_SP_Equipmento_De_Infrastructura_14,lyr_USO_SP_Commercial_15,lyr_major_roads_16,],
                                fold: 'open',
                                title: 'Land Use'});
var group_Socio_Economic = new ol.layer.Group({
                                layers: [lyr_Density_ppHa_2022_8,lyr_Density_ppHa_2010_9,],
                                fold: 'open',
                                title: 'Socio_Economic'});
var group_Green_Spaces__Natural_Resources = new ol.layer.Group({
                                layers: [lyr_Praca_Largo_2,lyr_Resevamataatlantica_3,lyr_Area_Protecao_4,lyr_Zoneamento_Geoambiental_5,lyr_Cadparcs_Parque_Unidade_Conservacao_6,lyr_corredor_ecologico_7,],
                                fold: 'open',
                                title: 'Green_Spaces_&_Natural_Resources'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,],
                                fold: 'open',
                                title: 'Base Map'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleMaps_1.setVisible(true);lyr_Praca_Largo_2.setVisible(false);lyr_Resevamataatlantica_3.setVisible(false);lyr_Area_Protecao_4.setVisible(false);lyr_Zoneamento_Geoambiental_5.setVisible(false);lyr_Cadparcs_Parque_Unidade_Conservacao_6.setVisible(false);lyr_corredor_ecologico_7.setVisible(false);lyr_Density_ppHa_2022_8.setVisible(false);lyr_Density_ppHa_2010_9.setVisible(false);lyr_water_bodies_10.setVisible(false);lyr_USU_SP_Misto_11.setVisible(false);lyr_USO_SP_Industrial_12.setVisible(false);lyr_USO_SP_Equipmento_Social_13.setVisible(false);lyr_USO_SP_Equipmento_De_Infrastructura_14.setVisible(false);lyr_USO_SP_Commercial_15.setVisible(false);lyr_major_roads_16.setVisible(false);lyr_fabdem_hillshade_SP_Clip_17.setVisible(false);lyr_ndbi_SP_clip_18.setVisible(false);lyr_ndvi_SP_clip_19.setVisible(false);lyr_lst_Night_SP_clip_20.setVisible(false);lyr_LST_SP_dec2024_Feb2025_21.setVisible(true);lyr_All_Favelas_SP_2022_22.setVisible(true);lyr_top_10_coolest_favelas_SP_23.setVisible(false);lyr_top_10_hottest_favelas_SP_24.setVisible(false);lyr_Most_Populated_Favleas_SP_25.setVisible(false);lyr_SP_Municipalities_Boundaries_26.setVisible(false);lyr_Censustracks_SP_2022_27.setVisible(false);lyr_SP_District_Boundaries_28.setVisible(false);lyr_SP_Municipality_Boundary_29.setVisible(true);
var layersList = [group_BaseMap,group_Green_Spaces__Natural_Resources,group_Socio_Economic,group_LandUse,group_UrbanHeatOtherLandParameters,group_Favelas,group_AdministrativeBoundaries];
lyr_Praca_Largo_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'categoria': 'categoria', 'titulo': 'titulo', 'preposicao': 'preposicao', 'nome': 'nome', 'lote_tipo': 'lote_tipo', 'link': 'link', 'distrito': 'distrito', 'subprefeit': 'subprefeit', 'area_metro': 'area_metro', 'data_carga': 'data_carga', 'endereco1': 'endereco1', 'cep1': 'cep1', 'endereco2': 'endereco2', 'cep2': 'cep2', 'endereco3': 'endereco3', 'cep3': 'cep3', 'bairro': 'bairro', 'codigo_dis': 'codigo_dis', 'codigo_sub': 'codigo_sub', 'uso_tipo': 'uso_tipo', 'codlog': 'codlog', 'perimetro_': 'perimetro_', 'snippet': 'snippet', });
lyr_Resevamataatlantica_3.set('fieldAliases', {'ma_cl_vegt': 'ma_cl_vegt', 'ma_area_ha': 'ma_area_ha', 'ma_area_mt': 'ma_area_mt', 'ma_projeto': 'ma_projeto', 'ma_dt_carg': 'ma_dt_carg', 'ma_fonte': 'ma_fonte', 'ma_id': 'ma_id', 'ma_cd_vegt': 'ma_cd_vegt', });
lyr_Area_Protecao_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'nm_esfera_': 'nm_esfera_', 'nm_area_pr': 'nm_area_pr', 'qt_area_me': 'qt_area_me', 'tx_instrum': 'tx_instrum', 'snippet': 'snippet', });
lyr_Zoneamento_Geoambiental_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'qt_area_me': 'qt_area_me', 'tx_tipo_ar': 'tx_tipo_ar', 'snippet': 'snippet', });
lyr_Cadparcs_Parque_Unidade_Conservacao_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'tx_tipo_ca': 'tx_tipo_ca', 'nm_area': 'nm_area', 'tx_data_in': 'tx_data_in', 'tx_instrum': 'tx_instrum', 'nm_adminis': 'nm_adminis', 'qt_area_me': 'qt_area_me', 'snippet': 'snippet', });
lyr_corredor_ecologico_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ce_municip': 'ce_municip', 'ce_area_m2': 'ce_area_m2', 'ce_nome': 'ce_nome', 'ce_trecho': 'ce_trecho', 'ce_fonte': 'ce_fonte', 'ce_projeto': 'ce_projeto', 'ce_area_ha': 'ce_area_ha', 'snippet': 'snippet', });
lyr_Density_ppHa_2022_8.set('fieldAliases', {'dd_id': 'dd_id', 'dd_cd_geo': 'dd_cd_geo', 'dd_area': 'dd_area', 'dd_setor': 'dd_setor', 'dd_ano': 'dd_ano', 'dd_qt_domi': 'dd_qt_domi', 'dd_vulnera': 'dd_vulnera', 'dd_populac': 'dd_populac', 'dd_hectare': 'dd_hectare', 'dd_hab_hec': 'dd_hab_hec', });
lyr_Density_ppHa_2010_9.set('fieldAliases', {'id': 'id', 'setor_cens': 'setor_cens', 'populacao': 'populacao', 'area_hect': 'area_hect', 'habit_hect': 'habit_hect', 'ano_densid': 'ano_densid', 'Pop_Dens': 'Pop_Dens', 'Area_Ha': 'Area_Ha', 'Prop_Old_P': 'Prop_Old_P', 'Pop_den0_1': 'Pop_den0_1', });
lyr_water_bodies_10.set('fieldAliases', {'FID': 'FID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_USU_SP_Misto_11.set('fieldAliases', {'FID_1': 'FID_1', 'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'MODAL_10': 'MODAL_10', 'CLASS_10': 'CLASS_10', 'USO_10': 'USO_10', 'CATEG_10': 'CATEG_10', 'TIPO_10': 'TIPO_10', });
lyr_USO_SP_Industrial_12.set('fieldAliases', {'FID_1': 'FID_1', 'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'MODAL_10': 'MODAL_10', 'CLASS_10': 'CLASS_10', 'USO_10': 'USO_10', 'CATEG_10': 'CATEG_10', 'TIPO_10': 'TIPO_10', });
lyr_USO_SP_Equipmento_Social_13.set('fieldAliases', {'FID_1': 'FID_1', 'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'MODAL_10': 'MODAL_10', 'CLASS_10': 'CLASS_10', 'USO_10': 'USO_10', 'CATEG_10': 'CATEG_10', 'TIPO_10': 'TIPO_10', });
lyr_USO_SP_Equipmento_De_Infrastructura_14.set('fieldAliases', {'FID_1': 'FID_1', 'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'MODAL_10': 'MODAL_10', 'CLASS_10': 'CLASS_10', 'USO_10': 'USO_10', 'CATEG_10': 'CATEG_10', 'TIPO_10': 'TIPO_10', });
lyr_USO_SP_Commercial_15.set('fieldAliases', {'FID_1': 'FID_1', 'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'MODAL_10': 'MODAL_10', 'CLASS_10': 'CLASS_10', 'USO_10': 'USO_10', 'CATEG_10': 'CATEG_10', 'TIPO_10': 'TIPO_10', });
lyr_major_roads_16.set('fieldAliases', {'Id': 'Id', });
lyr_All_Favelas_SP_2022_22.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'cd_uf': 'cd_uf', 'nm_uf': 'nm_uf', 'sigla_uf': 'sigla_uf', 'cd_mun': 'cd_mun', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'Density': 'Density', 'LST': 'LST', });
lyr_top_10_coolest_favelas_SP_23.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'nm_uf': 'nm_uf', 'LST': 'LST', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', 'Density': 'Density', });
lyr_top_10_hottest_favelas_SP_24.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'nm_uf': 'nm_uf', 'LST': 'LST', 'Density': 'Density', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', });
lyr_Most_Populated_Favleas_SP_25.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_uf': 'nm_uf', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'Area_Hec': 'Area_Hec', 'Density': 'Density', 'Mean_LST': 'Mean_LST', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', });
lyr_SP_Municipalities_Boundaries_26.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_Censustracks_SP_2022_27.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', });
lyr_SP_District_Boundaries_28.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', });
lyr_SP_Municipality_Boundary_29.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_Praca_Largo_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'categoria': 'TextEdit', 'titulo': 'TextEdit', 'preposicao': 'TextEdit', 'nome': 'TextEdit', 'lote_tipo': 'TextEdit', 'link': 'TextEdit', 'distrito': 'TextEdit', 'subprefeit': 'TextEdit', 'area_metro': 'TextEdit', 'data_carga': 'TextEdit', 'endereco1': 'TextEdit', 'cep1': 'TextEdit', 'endereco2': 'TextEdit', 'cep2': 'TextEdit', 'endereco3': 'TextEdit', 'cep3': 'TextEdit', 'bairro': 'TextEdit', 'codigo_dis': 'TextEdit', 'codigo_sub': 'TextEdit', 'uso_tipo': 'TextEdit', 'codlog': 'TextEdit', 'perimetro_': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Resevamataatlantica_3.set('fieldImages', {'ma_cl_vegt': 'TextEdit', 'ma_area_ha': 'TextEdit', 'ma_area_mt': 'TextEdit', 'ma_projeto': 'TextEdit', 'ma_dt_carg': 'TextEdit', 'ma_fonte': 'TextEdit', 'ma_id': 'TextEdit', 'ma_cd_vegt': 'TextEdit', });
lyr_Area_Protecao_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'nm_esfera_': 'TextEdit', 'nm_area_pr': 'TextEdit', 'qt_area_me': 'TextEdit', 'tx_instrum': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Zoneamento_Geoambiental_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'qt_area_me': 'TextEdit', 'tx_tipo_ar': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Cadparcs_Parque_Unidade_Conservacao_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'tx_tipo_ca': 'TextEdit', 'nm_area': 'TextEdit', 'tx_data_in': 'TextEdit', 'tx_instrum': 'TextEdit', 'nm_adminis': 'TextEdit', 'qt_area_me': 'TextEdit', 'snippet': 'TextEdit', });
lyr_corredor_ecologico_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ce_municip': 'TextEdit', 'ce_area_m2': 'TextEdit', 'ce_nome': 'TextEdit', 'ce_trecho': 'TextEdit', 'ce_fonte': 'TextEdit', 'ce_projeto': 'TextEdit', 'ce_area_ha': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Density_ppHa_2022_8.set('fieldImages', {'dd_id': 'TextEdit', 'dd_cd_geo': 'TextEdit', 'dd_area': 'TextEdit', 'dd_setor': 'TextEdit', 'dd_ano': 'Range', 'dd_qt_domi': 'Range', 'dd_vulnera': 'Range', 'dd_populac': 'Range', 'dd_hectare': 'TextEdit', 'dd_hab_hec': 'TextEdit', });
lyr_Density_ppHa_2010_9.set('fieldImages', {'id': 'TextEdit', 'setor_cens': 'TextEdit', 'populacao': 'Range', 'area_hect': 'TextEdit', 'habit_hect': 'TextEdit', 'ano_densid': 'Range', 'Pop_Dens': 'TextEdit', 'Area_Ha': 'TextEdit', 'Prop_Old_P': 'TextEdit', 'Pop_den0_1': 'TextEdit', });
lyr_water_bodies_10.set('fieldImages', {'FID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_USU_SP_Misto_11.set('fieldImages', {'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MODAL_10': 'TextEdit', 'CLASS_10': 'TextEdit', 'USO_10': 'TextEdit', 'CATEG_10': 'TextEdit', 'TIPO_10': 'TextEdit', });
lyr_USO_SP_Industrial_12.set('fieldImages', {'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MODAL_10': 'TextEdit', 'CLASS_10': 'TextEdit', 'USO_10': 'TextEdit', 'CATEG_10': 'TextEdit', 'TIPO_10': 'TextEdit', });
lyr_USO_SP_Equipmento_Social_13.set('fieldImages', {'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MODAL_10': 'TextEdit', 'CLASS_10': 'TextEdit', 'USO_10': 'TextEdit', 'CATEG_10': 'TextEdit', 'TIPO_10': 'TextEdit', });
lyr_USO_SP_Equipmento_De_Infrastructura_14.set('fieldImages', {'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MODAL_10': 'TextEdit', 'CLASS_10': 'TextEdit', 'USO_10': 'TextEdit', 'CATEG_10': 'TextEdit', 'TIPO_10': 'TextEdit', });
lyr_USO_SP_Commercial_15.set('fieldImages', {'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MODAL_10': 'TextEdit', 'CLASS_10': 'TextEdit', 'USO_10': 'TextEdit', 'CATEG_10': 'TextEdit', 'TIPO_10': 'TextEdit', });
lyr_major_roads_16.set('fieldImages', {'Id': 'Range', });
lyr_All_Favelas_SP_2022_22.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'cd_uf': 'Hidden', 'nm_uf': 'TextEdit', 'sigla_uf': 'TextEdit', 'cd_mun': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'Density': 'TextEdit', 'LST': 'TextEdit', });
lyr_top_10_coolest_favelas_SP_23.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'nm_uf': 'TextEdit', 'LST': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', 'Density': 'TextEdit', });
lyr_top_10_hottest_favelas_SP_24.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'nm_uf': 'TextEdit', 'LST': 'TextEdit', 'Density': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', });
lyr_Most_Populated_Favleas_SP_25.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_uf': 'TextEdit', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'Area_Hec': 'TextEdit', 'Density': 'TextEdit', 'Mean_LST': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', });
lyr_SP_Municipalities_Boundaries_26.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'Hidden', 'AREA_KM2': 'TextEdit', });
lyr_Censustracks_SP_2022_27.set('fieldImages', {'CD_SETOR': 'Hidden', 'SITUACAO': 'Hidden', 'CD_SIT': 'Hidden', 'CD_TIPO': 'Hidden', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_MUN': 'Hidden', 'NM_MUN': 'Hidden', 'CD_DIST': 'Hidden', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'Hidden', 'NM_SUBDIST': 'Hidden', 'CD_BAIRRO': 'Hidden', 'NM_BAIRRO': 'Hidden', 'CD_NU': 'Hidden', 'NM_NU': 'Hidden', 'CD_FCU': 'Hidden', 'NM_FCU': 'Hidden', 'CD_AGLOM': 'Hidden', 'NM_AGLOM': 'Hidden', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_RGI': 'Hidden', 'NM_RGI': 'Hidden', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'Hidden', });
lyr_SP_District_Boundaries_28.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', });
lyr_SP_Municipality_Boundary_29.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'Hidden', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Praca_Largo_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'categoria': 'no label', 'titulo': 'no label', 'preposicao': 'no label', 'nome': 'no label', 'lote_tipo': 'no label', 'link': 'no label', 'distrito': 'no label', 'subprefeit': 'no label', 'area_metro': 'no label', 'data_carga': 'no label', 'endereco1': 'no label', 'cep1': 'no label', 'endereco2': 'no label', 'cep2': 'no label', 'endereco3': 'no label', 'cep3': 'no label', 'bairro': 'no label', 'codigo_dis': 'no label', 'codigo_sub': 'no label', 'uso_tipo': 'no label', 'codlog': 'no label', 'perimetro_': 'no label', 'snippet': 'no label', });
lyr_Resevamataatlantica_3.set('fieldLabels', {'ma_cl_vegt': 'no label', 'ma_area_ha': 'no label', 'ma_area_mt': 'no label', 'ma_projeto': 'no label', 'ma_dt_carg': 'no label', 'ma_fonte': 'no label', 'ma_id': 'no label', 'ma_cd_vegt': 'no label', });
lyr_Area_Protecao_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'nm_esfera_': 'no label', 'nm_area_pr': 'no label', 'qt_area_me': 'no label', 'tx_instrum': 'no label', 'snippet': 'no label', });
lyr_Zoneamento_Geoambiental_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'qt_area_me': 'no label', 'tx_tipo_ar': 'no label', 'snippet': 'no label', });
lyr_Cadparcs_Parque_Unidade_Conservacao_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'tx_tipo_ca': 'no label', 'nm_area': 'no label', 'tx_data_in': 'no label', 'tx_instrum': 'no label', 'nm_adminis': 'no label', 'qt_area_me': 'no label', 'snippet': 'no label', });
lyr_corredor_ecologico_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ce_municip': 'no label', 'ce_area_m2': 'no label', 'ce_nome': 'no label', 'ce_trecho': 'no label', 'ce_fonte': 'no label', 'ce_projeto': 'no label', 'ce_area_ha': 'no label', 'snippet': 'no label', });
lyr_Density_ppHa_2022_8.set('fieldLabels', {'dd_id': 'no label', 'dd_cd_geo': 'no label', 'dd_area': 'no label', 'dd_setor': 'no label', 'dd_ano': 'no label', 'dd_qt_domi': 'no label', 'dd_vulnera': 'no label', 'dd_populac': 'no label', 'dd_hectare': 'no label', 'dd_hab_hec': 'no label', });
lyr_Density_ppHa_2010_9.set('fieldLabels', {'id': 'no label', 'setor_cens': 'no label', 'populacao': 'no label', 'area_hect': 'no label', 'habit_hect': 'no label', 'ano_densid': 'no label', 'Pop_Dens': 'no label', 'Area_Ha': 'no label', 'Prop_Old_P': 'no label', 'Pop_den0_1': 'no label', });
lyr_water_bodies_10.set('fieldLabels', {'FID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_USU_SP_Misto_11.set('fieldLabels', {'FID_1': 'no label', 'ID': 'no label', 'MUNICIPIO': 'no label', 'MODAL_10': 'no label', 'CLASS_10': 'no label', 'USO_10': 'no label', 'CATEG_10': 'no label', 'TIPO_10': 'no label', });
lyr_USO_SP_Industrial_12.set('fieldLabels', {'FID_1': 'no label', 'ID': 'no label', 'MUNICIPIO': 'no label', 'MODAL_10': 'no label', 'CLASS_10': 'no label', 'USO_10': 'no label', 'CATEG_10': 'no label', 'TIPO_10': 'no label', });
lyr_USO_SP_Equipmento_Social_13.set('fieldLabels', {'FID_1': 'no label', 'ID': 'no label', 'MUNICIPIO': 'no label', 'MODAL_10': 'no label', 'CLASS_10': 'no label', 'USO_10': 'no label', 'CATEG_10': 'no label', 'TIPO_10': 'no label', });
lyr_USO_SP_Equipmento_De_Infrastructura_14.set('fieldLabels', {'FID_1': 'no label', 'ID': 'no label', 'MUNICIPIO': 'no label', 'MODAL_10': 'no label', 'CLASS_10': 'no label', 'USO_10': 'no label', 'CATEG_10': 'no label', 'TIPO_10': 'no label', });
lyr_USO_SP_Commercial_15.set('fieldLabels', {'FID_1': 'no label', 'ID': 'no label', 'MUNICIPIO': 'no label', 'MODAL_10': 'no label', 'CLASS_10': 'no label', 'USO_10': 'no label', 'CATEG_10': 'no label', 'TIPO_10': 'no label', });
lyr_major_roads_16.set('fieldLabels', {'Id': 'hidden field', });
lyr_All_Favelas_SP_2022_22.set('fieldLabels', {'nm_fcu': 'header label - visible with data', 'nm_uf': 'no label', 'sigla_uf': 'no label', 'cd_mun': 'no label', 'Pop_2022': 'header label - visible with data', 'Area': 'header label - visible with data', 'Density': 'header label - visible with data', 'LST': 'header label - visible with data', });
lyr_top_10_coolest_favelas_SP_23.set('fieldLabels', {'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'nm_uf': 'no label', 'LST': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', 'Density': 'no label', });
lyr_top_10_hottest_favelas_SP_24.set('fieldLabels', {'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'nm_uf': 'no label', 'LST': 'no label', 'Density': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', });
lyr_Most_Populated_Favleas_SP_25.set('fieldLabels', {'nm_uf': 'no label', 'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'Area_Hec': 'no label', 'Density': 'no label', 'Mean_LST': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', });
lyr_SP_Municipalities_Boundaries_26.set('fieldLabels', {'NM_MUN': 'no label', 'NM_RGI': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Censustracks_SP_2022_27.set('fieldLabels', {'AREA_KM2': 'no label', 'NM_REGIAO': 'no label', 'NM_DIST': 'no label', });
lyr_SP_District_Boundaries_28.set('fieldLabels', {'ID': 'no label', 'CD_GEOCODD': 'no label', 'NM_DISTRIT': 'no label', });
lyr_SP_Municipality_Boundary_29.set('fieldLabels', {'NM_MUN': 'no label', 'NM_REGIAO': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_SP_Municipality_Boundary_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});