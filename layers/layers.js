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
var lyr_fabdem_hillshade_SP_Clip_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'fabdem_hillshade_SP_Clip<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_0.png" /> <= 164<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_1.png" /> 164 - 175<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_2.png" /> 175 - 180<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_3.png" /> 180 - 181<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_4.png" /> 181 - 186<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_5.png" /> 186 - 197<br />\
    <img src="styles/legend/fabdem_hillshade_SP_Clip_5_6.png" /> > 197<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/fabdem_hillshade_SP_Clip_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754450.000000, -5161320.000000, -2675160.000000]
        })
    });
var lyr_ndbi_SP_clip_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ndbi_SP_clip<br />\
    <img src="styles/legend/ndbi_SP_clip_6_0.png" /> <= -0.3833<br />\
    <img src="styles/legend/ndbi_SP_clip_6_1.png" /> -0.3833 - -0.3058<br />\
    <img src="styles/legend/ndbi_SP_clip_6_2.png" /> -0.3058 - -0.1072<br />\
    <img src="styles/legend/ndbi_SP_clip_6_3.png" /> -0.1072 - 0.0283<br />\
    <img src="styles/legend/ndbi_SP_clip_6_4.png" /> 0.0283 - 0.1077<br />\
    <img src="styles/legend/ndbi_SP_clip_6_5.png" /> > 0.1077<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndbi_SP_clip_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var lyr_ndvi_SP_clip_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ndvi_SP_clip<br />\
    <img src="styles/legend/ndvi_SP_clip_7_0.png" /> <= -0.5961<br />\
    <img src="styles/legend/ndvi_SP_clip_7_1.png" /> -0.5961 - -0.1974<br />\
    <img src="styles/legend/ndvi_SP_clip_7_2.png" /> -0.1974 - 0.2013<br />\
    <img src="styles/legend/ndvi_SP_clip_7_3.png" /> 0.2013 - 0.5999<br />\
    <img src="styles/legend/ndvi_SP_clip_7_4.png" /> > 0.5999<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndvi_SP_clip_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532619, -5161320.000000, -2675162.793672]
        })
    });
var lyr_lst_Night_SP_clip_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'lst_Night_SP_clip<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_0.png" /> <= 12.0400<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_1.png" /> 12.0400 - 13.4700<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_2.png" /> 13.4700 - 14.9000<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_3.png" /> 14.9000 - 16.3300<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_4.png" /> 16.3300 - 17.7600<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_5.png" /> 17.7600 - 19.1900<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_6.png" /> 19.1900 - 20.6200<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_7.png" /> 20.6200 - 22.0500<br />\
    <img src="styles/legend/lst_Night_SP_clip_8_8.png" /> > 22.0500<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/lst_Night_SP_clip_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var lyr_LST_SP_dec2024_Feb2025_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_SP_dec2024_Feb2025<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_0.png" /> <= 18.1178<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_1.png" /> 18.1178 - 23.0445<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_2.png" /> 23.0445 - 27.9711<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_3.png" /> 27.9711 - 32.8978<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_4.png" /> 32.8978 - 37.8244<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_5.png" /> 37.8244 - 42.7511<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_6.png" /> 42.7511 - 47.6777<br />\
    <img src="styles/legend/LST_SP_dec2024_Feb2025_9_7.png" /> > 47.6777<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_SP_dec2024_Feb2025_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5212680.000000, -2754439.532535, -5161320.000000, -2675162.793588]
        })
    });
var format_All_Favelas_SP_2022_10 = new ol.format.GeoJSON();
var features_All_Favelas_SP_2022_10 = format_All_Favelas_SP_2022_10.readFeatures(json_All_Favelas_SP_2022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Favelas_SP_2022_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_Favelas_SP_2022_10.addFeatures(features_All_Favelas_SP_2022_10);
var lyr_All_Favelas_SP_2022_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_Favelas_SP_2022_10, 
                style: style_All_Favelas_SP_2022_10,
                popuplayertitle: 'All_Favelas_SP_2022',
                interactive: true,
                title: '<img src="styles/legend/All_Favelas_SP_2022_10.png" /> All_Favelas_SP_2022'
            });
var format_top_10_coolest_favelas_SP_11 = new ol.format.GeoJSON();
var features_top_10_coolest_favelas_SP_11 = format_top_10_coolest_favelas_SP_11.readFeatures(json_top_10_coolest_favelas_SP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_top_10_coolest_favelas_SP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_top_10_coolest_favelas_SP_11.addFeatures(features_top_10_coolest_favelas_SP_11);
var lyr_top_10_coolest_favelas_SP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_top_10_coolest_favelas_SP_11, 
                style: style_top_10_coolest_favelas_SP_11,
                popuplayertitle: 'top_10_coolest_favelas_SP',
                interactive: true,
                title: '<img src="styles/legend/top_10_coolest_favelas_SP_11.png" /> top_10_coolest_favelas_SP'
            });
var format_top_10_hottest_favelas_SP_12 = new ol.format.GeoJSON();
var features_top_10_hottest_favelas_SP_12 = format_top_10_hottest_favelas_SP_12.readFeatures(json_top_10_hottest_favelas_SP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_top_10_hottest_favelas_SP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_top_10_hottest_favelas_SP_12.addFeatures(features_top_10_hottest_favelas_SP_12);
var lyr_top_10_hottest_favelas_SP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_top_10_hottest_favelas_SP_12, 
                style: style_top_10_hottest_favelas_SP_12,
                popuplayertitle: 'top_10_hottest_favelas_SP',
                interactive: true,
                title: '<img src="styles/legend/top_10_hottest_favelas_SP_12.png" /> top_10_hottest_favelas_SP'
            });
var format_Most_Populated_Favleas_SP_13 = new ol.format.GeoJSON();
var features_Most_Populated_Favleas_SP_13 = format_Most_Populated_Favleas_SP_13.readFeatures(json_Most_Populated_Favleas_SP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Most_Populated_Favleas_SP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Most_Populated_Favleas_SP_13.addFeatures(features_Most_Populated_Favleas_SP_13);
var lyr_Most_Populated_Favleas_SP_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Most_Populated_Favleas_SP_13, 
                style: style_Most_Populated_Favleas_SP_13,
                popuplayertitle: 'Most_Populated_Favleas_SP',
                interactive: true,
                title: '<img src="styles/legend/Most_Populated_Favleas_SP_13.png" /> Most_Populated_Favleas_SP'
            });
var format_SP_Municipalities_Boundaries_14 = new ol.format.GeoJSON();
var features_SP_Municipalities_Boundaries_14 = format_SP_Municipalities_Boundaries_14.readFeatures(json_SP_Municipalities_Boundaries_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_Municipalities_Boundaries_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_Municipalities_Boundaries_14.addFeatures(features_SP_Municipalities_Boundaries_14);
var lyr_SP_Municipalities_Boundaries_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_Municipalities_Boundaries_14, 
                style: style_SP_Municipalities_Boundaries_14,
                popuplayertitle: 'SP_Municipalities_Boundaries',
                interactive: true,
                title: 'SP_Municipalities_Boundaries'
            });
var format_SP_District_Boundaries_15 = new ol.format.GeoJSON();
var features_SP_District_Boundaries_15 = format_SP_District_Boundaries_15.readFeatures(json_SP_District_Boundaries_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_District_Boundaries_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_District_Boundaries_15.addFeatures(features_SP_District_Boundaries_15);
var lyr_SP_District_Boundaries_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_District_Boundaries_15, 
                style: style_SP_District_Boundaries_15,
                popuplayertitle: 'SP_District_Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SP_District_Boundaries_15.png" /> SP_District_Boundaries'
            });
var format_SP_Municipality_Boundary_16 = new ol.format.GeoJSON();
var features_SP_Municipality_Boundary_16 = format_SP_Municipality_Boundary_16.readFeatures(json_SP_Municipality_Boundary_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_Municipality_Boundary_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_Municipality_Boundary_16.addFeatures(features_SP_Municipality_Boundary_16);
var lyr_SP_Municipality_Boundary_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_Municipality_Boundary_16, 
                style: style_SP_Municipality_Boundary_16,
                popuplayertitle: 'SP_Municipality_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SP_Municipality_Boundary_16.png" /> SP_Municipality_Boundary'
            });
var group_AdministrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_SP_Municipalities_Boundaries_14,lyr_SP_District_Boundaries_15,lyr_SP_Municipality_Boundary_16,],
                                fold: 'open',
                                title: 'Administrative Boundaries'});
var group_Favelas = new ol.layer.Group({
                                layers: [lyr_All_Favelas_SP_2022_10,lyr_top_10_coolest_favelas_SP_11,lyr_top_10_hottest_favelas_SP_12,lyr_Most_Populated_Favleas_SP_13,],
                                fold: 'open',
                                title: 'Favelas'});
var group_UrbanHeatOtherLandParameters = new ol.layer.Group({
                                layers: [lyr_fabdem_hillshade_SP_Clip_5,lyr_ndbi_SP_clip_6,lyr_ndvi_SP_clip_7,lyr_lst_Night_SP_clip_8,lyr_LST_SP_dec2024_Feb2025_9,],
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
                                layers: [lyr_Praca_Largo_2,lyr_Resevamataatlantica_3,lyr_Area_Protecao_4,],
                                fold: 'open',
                                title: 'Green_Spaces_&_Natural_Resources'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,],
                                fold: 'open',
                                title: 'Base Map'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleMaps_1.setVisible(true);lyr_Praca_Largo_2.setVisible(false);lyr_Resevamataatlantica_3.setVisible(false);lyr_Area_Protecao_4.setVisible(false);lyr_fabdem_hillshade_SP_Clip_5.setVisible(false);lyr_ndbi_SP_clip_6.setVisible(false);lyr_ndvi_SP_clip_7.setVisible(false);lyr_lst_Night_SP_clip_8.setVisible(false);lyr_LST_SP_dec2024_Feb2025_9.setVisible(true);lyr_All_Favelas_SP_2022_10.setVisible(true);lyr_top_10_coolest_favelas_SP_11.setVisible(false);lyr_top_10_hottest_favelas_SP_12.setVisible(false);lyr_Most_Populated_Favleas_SP_13.setVisible(false);lyr_SP_Municipalities_Boundaries_14.setVisible(false);lyr_SP_District_Boundaries_15.setVisible(false);lyr_SP_Municipality_Boundary_16.setVisible(true);
var layersList = [group_BaseMap,group_Green_Spaces__Natural_Resources,group_UrbanHeatOtherLandParameters,group_Favelas,group_AdministrativeBoundaries];
lyr_Praca_Largo_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'categoria': 'categoria', 'titulo': 'titulo', 'preposicao': 'preposicao', 'nome': 'nome', 'lote_tipo': 'lote_tipo', 'link': 'link', 'distrito': 'distrito', 'subprefeit': 'subprefeit', 'area_metro': 'area_metro', 'data_carga': 'data_carga', 'endereco1': 'endereco1', 'cep1': 'cep1', 'endereco2': 'endereco2', 'cep2': 'cep2', 'endereco3': 'endereco3', 'cep3': 'cep3', 'bairro': 'bairro', 'codigo_dis': 'codigo_dis', 'codigo_sub': 'codigo_sub', 'uso_tipo': 'uso_tipo', 'codlog': 'codlog', 'perimetro_': 'perimetro_', 'snippet': 'snippet', });
lyr_Resevamataatlantica_3.set('fieldAliases', {'ma_cl_vegt': 'ma_cl_vegt', 'ma_area_ha': 'ma_area_ha', 'ma_area_mt': 'ma_area_mt', 'ma_projeto': 'ma_projeto', 'ma_dt_carg': 'ma_dt_carg', 'ma_fonte': 'ma_fonte', 'ma_id': 'ma_id', 'ma_cd_vegt': 'ma_cd_vegt', });
lyr_Area_Protecao_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_identif': 'cd_identif', 'nm_esfera_': 'nm_esfera_', 'nm_area_pr': 'nm_area_pr', 'qt_area_me': 'qt_area_me', 'tx_instrum': 'tx_instrum', 'snippet': 'snippet', });
lyr_All_Favelas_SP_2022_10.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'cd_uf': 'cd_uf', 'nm_uf': 'nm_uf', 'sigla_uf': 'sigla_uf', 'cd_mun': 'cd_mun', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'Density': 'Density', 'LST': 'LST', });
lyr_top_10_coolest_favelas_SP_11.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'nm_uf': 'nm_uf', 'LST': 'LST', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', 'Density': 'Density', });
lyr_top_10_hottest_favelas_SP_12.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'nm_uf': 'nm_uf', 'LST': 'LST', 'Density': 'Density', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', });
lyr_Most_Populated_Favleas_SP_13.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_uf': 'nm_uf', 'nm_fcu': 'nm_fcu', 'Pop_2022': 'Pop_2022', 'Area': 'Area', 'Area_Hec': 'Area_Hec', 'Density': 'Density', 'Mean_LST': 'Mean_LST', 'Max_LST': 'Max_LST', 'Min_LST': 'Min_LST', });
lyr_SP_Municipalities_Boundaries_14.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_SP_District_Boundaries_15.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', });
lyr_SP_Municipality_Boundary_16.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_Praca_Largo_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'categoria': 'TextEdit', 'titulo': 'TextEdit', 'preposicao': 'TextEdit', 'nome': 'TextEdit', 'lote_tipo': 'TextEdit', 'link': 'TextEdit', 'distrito': 'TextEdit', 'subprefeit': 'TextEdit', 'area_metro': 'TextEdit', 'data_carga': 'TextEdit', 'endereco1': 'TextEdit', 'cep1': 'TextEdit', 'endereco2': 'TextEdit', 'cep2': 'TextEdit', 'endereco3': 'TextEdit', 'cep3': 'TextEdit', 'bairro': 'TextEdit', 'codigo_dis': 'TextEdit', 'codigo_sub': 'TextEdit', 'uso_tipo': 'TextEdit', 'codlog': 'TextEdit', 'perimetro_': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Resevamataatlantica_3.set('fieldImages', {'ma_cl_vegt': 'TextEdit', 'ma_area_ha': 'TextEdit', 'ma_area_mt': 'TextEdit', 'ma_projeto': 'TextEdit', 'ma_dt_carg': 'TextEdit', 'ma_fonte': 'TextEdit', 'ma_id': 'TextEdit', 'ma_cd_vegt': 'TextEdit', });
lyr_Area_Protecao_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_identif': 'TextEdit', 'nm_esfera_': 'TextEdit', 'nm_area_pr': 'TextEdit', 'qt_area_me': 'TextEdit', 'tx_instrum': 'TextEdit', 'snippet': 'TextEdit', });
lyr_All_Favelas_SP_2022_10.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'cd_uf': 'Hidden', 'nm_uf': 'TextEdit', 'sigla_uf': 'TextEdit', 'cd_mun': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'Density': 'TextEdit', 'LST': 'TextEdit', });
lyr_top_10_coolest_favelas_SP_11.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'nm_uf': 'TextEdit', 'LST': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', 'Density': 'TextEdit', });
lyr_top_10_hottest_favelas_SP_12.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'nm_uf': 'TextEdit', 'LST': 'TextEdit', 'Density': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', });
lyr_Most_Populated_Favleas_SP_13.set('fieldImages', {'cd_fcu': 'Hidden', 'nm_uf': 'TextEdit', 'nm_fcu': 'TextEdit', 'Pop_2022': 'TextEdit', 'Area': 'TextEdit', 'Area_Hec': 'TextEdit', 'Density': 'TextEdit', 'Mean_LST': 'TextEdit', 'Max_LST': 'TextEdit', 'Min_LST': 'TextEdit', });
lyr_SP_Municipalities_Boundaries_14.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'Hidden', 'AREA_KM2': 'TextEdit', });
lyr_SP_District_Boundaries_15.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', });
lyr_SP_Municipality_Boundary_16.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'Hidden', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'CD_REGIAO': 'Hidden', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'Hidden', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Praca_Largo_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'categoria': 'no label', 'titulo': 'no label', 'preposicao': 'no label', 'nome': 'no label', 'lote_tipo': 'no label', 'link': 'no label', 'distrito': 'no label', 'subprefeit': 'no label', 'area_metro': 'no label', 'data_carga': 'no label', 'endereco1': 'no label', 'cep1': 'no label', 'endereco2': 'no label', 'cep2': 'no label', 'endereco3': 'no label', 'cep3': 'no label', 'bairro': 'no label', 'codigo_dis': 'no label', 'codigo_sub': 'no label', 'uso_tipo': 'no label', 'codlog': 'no label', 'perimetro_': 'no label', 'snippet': 'no label', });
lyr_Resevamataatlantica_3.set('fieldLabels', {'ma_cl_vegt': 'no label', 'ma_area_ha': 'no label', 'ma_area_mt': 'no label', 'ma_projeto': 'no label', 'ma_dt_carg': 'no label', 'ma_fonte': 'no label', 'ma_id': 'no label', 'ma_cd_vegt': 'no label', });
lyr_Area_Protecao_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_identif': 'no label', 'nm_esfera_': 'no label', 'nm_area_pr': 'no label', 'qt_area_me': 'no label', 'tx_instrum': 'no label', 'snippet': 'no label', });
lyr_All_Favelas_SP_2022_10.set('fieldLabels', {'nm_fcu': 'header label - visible with data', 'nm_uf': 'no label', 'sigla_uf': 'no label', 'cd_mun': 'no label', 'Pop_2022': 'header label - visible with data', 'Area': 'header label - visible with data', 'Density': 'header label - visible with data', 'LST': 'header label - visible with data', });
lyr_top_10_coolest_favelas_SP_11.set('fieldLabels', {'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'nm_uf': 'no label', 'LST': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', 'Density': 'no label', });
lyr_top_10_hottest_favelas_SP_12.set('fieldLabels', {'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'nm_uf': 'no label', 'LST': 'no label', 'Density': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', });
lyr_Most_Populated_Favleas_SP_13.set('fieldLabels', {'nm_uf': 'no label', 'nm_fcu': 'no label', 'Pop_2022': 'no label', 'Area': 'no label', 'Area_Hec': 'no label', 'Density': 'no label', 'Mean_LST': 'no label', 'Max_LST': 'no label', 'Min_LST': 'no label', });
lyr_SP_Municipalities_Boundaries_14.set('fieldLabels', {'NM_MUN': 'no label', 'NM_RGI': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_SP_District_Boundaries_15.set('fieldLabels', {'ID': 'no label', 'CD_GEOCODD': 'no label', 'NM_DISTRIT': 'no label', });
lyr_SP_Municipality_Boundary_16.set('fieldLabels', {'NM_MUN': 'no label', 'NM_REGIAO': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_SP_Municipality_Boundary_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});