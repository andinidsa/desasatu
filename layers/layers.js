var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dissolvedcopy_1 = new ol.format.GeoJSON();
var features_Dissolvedcopy_1 = format_Dissolvedcopy_1.readFeatures(json_Dissolvedcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolvedcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolvedcopy_1.addFeatures(features_Dissolvedcopy_1);
var lyr_Dissolvedcopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolvedcopy_1, 
                style: style_Dissolvedcopy_1,
                popuplayertitle: "Dissolved copy",
                interactive: true,
    title: 'Dissolved copy<br />\
    <img src="styles/legend/Dissolvedcopy_1_0.png" /> RW 1<br />\
    <img src="styles/legend/Dissolvedcopy_1_1.png" /> RW 10<br />\
    <img src="styles/legend/Dissolvedcopy_1_2.png" /> RW 11<br />\
    <img src="styles/legend/Dissolvedcopy_1_3.png" /> RW 12<br />\
    <img src="styles/legend/Dissolvedcopy_1_4.png" /> RW 13<br />\
    <img src="styles/legend/Dissolvedcopy_1_5.png" /> RW 2<br />\
    <img src="styles/legend/Dissolvedcopy_1_6.png" /> RW 3<br />\
    <img src="styles/legend/Dissolvedcopy_1_7.png" /> RW 4<br />\
    <img src="styles/legend/Dissolvedcopy_1_8.png" /> RW 5<br />\
    <img src="styles/legend/Dissolvedcopy_1_9.png" /> RW 6<br />\
    <img src="styles/legend/Dissolvedcopy_1_10.png" /> RW 7<br />\
    <img src="styles/legend/Dissolvedcopy_1_11.png" /> RW 8<br />\
    <img src="styles/legend/Dissolvedcopy_1_12.png" /> RW 9<br />\
    <img src="styles/legend/Dissolvedcopy_1_13.png" /> <br />\
    <img src="styles/legend/Dissolvedcopy_1_14.png" /> RT 1<br />\
    <img src="styles/legend/Dissolvedcopy_1_15.png" /> RT 2<br />\
    <img src="styles/legend/Dissolvedcopy_1_16.png" /> RT 3<br />\
    <img src="styles/legend/Dissolvedcopy_1_17.png" /> RT 4<br />\
    <img src="styles/legend/Dissolvedcopy_1_18.png" /> RT 5<br />\
    <img src="styles/legend/Dissolvedcopy_1_19.png" /> RT 6<br />\
    <img src="styles/legend/Dissolvedcopy_1_20.png" /> RT 7<br />\
    <img src="styles/legend/Dissolvedcopy_1_21.png" /> RT 8<br />'
        });
var format_Kebun_2 = new ol.format.GeoJSON();
var features_Kebun_2 = format_Kebun_2.readFeatures(json_Kebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_2.addFeatures(features_Kebun_2);
var lyr_Kebun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_2, 
                style: style_Kebun_2,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_2.png" /> Kebun'
            });
var format_PolyTempat_3 = new ol.format.GeoJSON();
var features_PolyTempat_3 = format_PolyTempat_3.readFeatures(json_PolyTempat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyTempat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyTempat_3.addFeatures(features_PolyTempat_3);
var lyr_PolyTempat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyTempat_3, 
                style: style_PolyTempat_3,
                popuplayertitle: "PolyTempat",
                interactive: true,
                title: '<img src="styles/legend/PolyTempat_3.png" /> PolyTempat'
            });
var format_poly_karkles_4 = new ol.format.GeoJSON();
var features_poly_karkles_4 = format_poly_karkles_4.readFeatures(json_poly_karkles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poly_karkles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly_karkles_4.addFeatures(features_poly_karkles_4);
var lyr_poly_karkles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poly_karkles_4, 
                style: style_poly_karkles_4,
                popuplayertitle: "poly_karkles",
                interactive: true,
                title: '<img src="styles/legend/poly_karkles_4.png" /> poly_karkles'
            });
var format_line_karkles_5 = new ol.format.GeoJSON();
var features_line_karkles_5 = format_line_karkles_5.readFeatures(json_line_karkles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_karkles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_karkles_5.addFeatures(features_line_karkles_5);
var lyr_line_karkles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_line_karkles_5, 
                style: style_line_karkles_5,
                popuplayertitle: "line_karkles",
                interactive: true,
                title: '<img src="styles/legend/line_karkles_5.png" /> line_karkles'
            });
var format_point_karkles_6 = new ol.format.GeoJSON();
var features_point_karkles_6 = format_point_karkles_6.readFeatures(json_point_karkles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_karkles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_karkles_6.addFeatures(features_point_karkles_6);
var lyr_point_karkles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_karkles_6, 
                style: style_point_karkles_6,
                popuplayertitle: "point_karkles",
                interactive: true,
                title: '<img src="styles/legend/point_karkles_6.png" /> point_karkles'
            });
var format_TempatIbadah_7 = new ol.format.GeoJSON();
var features_TempatIbadah_7 = format_TempatIbadah_7.readFeatures(json_TempatIbadah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_7.addFeatures(features_TempatIbadah_7);
var lyr_TempatIbadah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_7, 
                style: style_TempatIbadah_7,
                popuplayertitle: "TempatIbadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_7.png" /> TempatIbadah'
            });
var format_FasilitasUmum_8 = new ol.format.GeoJSON();
var features_FasilitasUmum_8 = format_FasilitasUmum_8.readFeatures(json_FasilitasUmum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_8.addFeatures(features_FasilitasUmum_8);
var lyr_FasilitasUmum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_8, 
                style: style_FasilitasUmum_8,
                popuplayertitle: "FasilitasUmum",
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_8.png" /> FasilitasUmum'
            });
var format_Instansi_9 = new ol.format.GeoJSON();
var features_Instansi_9 = format_Instansi_9.readFeatures(json_Instansi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Instansi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Instansi_9.addFeatures(features_Instansi_9);
var lyr_Instansi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Instansi_9, 
                style: style_Instansi_9,
                popuplayertitle: "Instansi",
                interactive: true,
                title: '<img src="styles/legend/Instansi_9.png" /> Instansi'
            });
var format_UMKM_10 = new ol.format.GeoJSON();
var features_UMKM_10 = format_UMKM_10.readFeatures(json_UMKM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_10.addFeatures(features_UMKM_10);
var lyr_UMKM_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_10, 
                style: style_UMKM_10,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_10.png" /> UMKM'
            });
var format_Sungai_11 = new ol.format.GeoJSON();
var features_Sungai_11 = format_Sungai_11.readFeatures(json_Sungai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_11.addFeatures(features_Sungai_11);
var lyr_Sungai_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_11, 
                style: style_Sungai_11,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_11.png" /> Sungai'
            });
var format_LembagaPendidikan_12 = new ol.format.GeoJSON();
var features_LembagaPendidikan_12 = format_LembagaPendidikan_12.readFeatures(json_LembagaPendidikan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LembagaPendidikan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LembagaPendidikan_12.addFeatures(features_LembagaPendidikan_12);
var lyr_LembagaPendidikan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LembagaPendidikan_12, 
                style: style_LembagaPendidikan_12,
                popuplayertitle: "LembagaPendidikan",
                interactive: true,
                title: '<img src="styles/legend/LembagaPendidikan_12.png" /> LembagaPendidikan'
            });
var format_Clipped_JalanKecil_13 = new ol.format.GeoJSON();
var features_Clipped_JalanKecil_13 = format_Clipped_JalanKecil_13.readFeatures(json_Clipped_JalanKecil_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_JalanKecil_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_JalanKecil_13.addFeatures(features_Clipped_JalanKecil_13);
var lyr_Clipped_JalanKecil_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_JalanKecil_13, 
                style: style_Clipped_JalanKecil_13,
                popuplayertitle: "Clipped_JalanKecil",
                interactive: true,
                title: '<img src="styles/legend/Clipped_JalanKecil_13.png" /> Clipped_JalanKecil'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dissolvedcopy_1.setVisible(true);lyr_Kebun_2.setVisible(true);lyr_PolyTempat_3.setVisible(true);lyr_poly_karkles_4.setVisible(true);lyr_line_karkles_5.setVisible(true);lyr_point_karkles_6.setVisible(true);lyr_TempatIbadah_7.setVisible(true);lyr_FasilitasUmum_8.setVisible(true);lyr_Instansi_9.setVisible(true);lyr_UMKM_10.setVisible(true);lyr_Sungai_11.setVisible(true);lyr_LembagaPendidikan_12.setVisible(true);lyr_Clipped_JalanKecil_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dissolvedcopy_1,lyr_Kebun_2,lyr_PolyTempat_3,lyr_poly_karkles_4,lyr_line_karkles_5,lyr_point_karkles_6,lyr_TempatIbadah_7,lyr_FasilitasUmum_8,lyr_Instansi_9,lyr_UMKM_10,lyr_Sungai_11,lyr_LembagaPendidikan_12,lyr_Clipped_JalanKecil_13];
lyr_Dissolvedcopy_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'RT': 'RT', 'RW/RT': 'RW/RT', });
lyr_Kebun_2.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_PolyTempat_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_poly_karkles_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_line_karkles_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_point_karkles_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_TempatIbadah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FasilitasUmum_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Instansi_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_UMKM_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sungai_11.set('fieldAliases', {'id': 'id', 'Nama/Ket': 'Nama/Ket', 'Lebar': 'Lebar', });
lyr_LembagaPendidikan_12.set('fieldAliases', {'id': 'id', 'NamaSekola': 'NamaSekola', });
lyr_Clipped_JalanKecil_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'layer': 'layer', 'path': 'path', });
lyr_Dissolvedcopy_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'RT': 'TextEdit', 'RW/RT': 'TextEdit', });
lyr_Kebun_2.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_PolyTempat_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_poly_karkles_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'highway': 'TextEdit', 'water': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', });
lyr_line_karkles_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_point_karkles_6.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_TempatIbadah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FasilitasUmum_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Instansi_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_UMKM_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sungai_11.set('fieldImages', {'id': 'TextEdit', 'Nama/Ket': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_LembagaPendidikan_12.set('fieldImages', {'id': 'TextEdit', 'NamaSekola': 'TextEdit', });
lyr_Clipped_JalanKecil_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Dissolvedcopy_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'RT': 'no label', 'RW/RT': 'no label', });
lyr_Kebun_2.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_PolyTempat_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_poly_karkles_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_line_karkles_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_point_karkles_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_TempatIbadah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_FasilitasUmum_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Instansi_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_UMKM_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sungai_11.set('fieldLabels', {'id': 'no label', 'Nama/Ket': 'no label', 'Lebar': 'no label', });
lyr_LembagaPendidikan_12.set('fieldLabels', {'id': 'no label', 'NamaSekola': 'no label', });
lyr_Clipped_JalanKecil_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Clipped_JalanKecil_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});