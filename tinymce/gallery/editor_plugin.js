(function(){tinymce.create("tinymce.plugins.TinymceThumbnailGalleryPlugin",{init:function(a,b){a.addCommand("mceTinymceThumbnailGallery",function(){a.windowManager.open({file:b+"/gallery.htm",width:480+parseInt(a.getLang("advimage.delta_width",0),10),height:385+parseInt(a.getLang("advimage.delta_height",0),10),inline:1,resizable:"yes",scrollbars:"yes"},{plugin_url:b})});a.addButton("TinymceThumbnailGallery",{title:"Thumbnail Gallery",cmd:"mceTinymceThumbnailGallery",image:b+"/img/gallery_btn.gif"});a.onNodeChange.add(function(d,c,e){c.setActive("TinymceThumbnailGallery",jQuery(e).parents("ul.TINYMCE_gallery").length);d.dom.loadCSS(b+"/css/content.css")})},createControl:function(b,a){return null},getInfo:function(){return{longname:"Tinymce Thumbnail Gallery",author:"James Charlesworth",authorurl:"http://www.jamescharlesworth.com",infourl:"http://www.jamescharlesworth.com/tools/tincMceGallery",version:"0.1"}}});tinymce.PluginManager.add("TinymceThumbnailGallery",tinymce.plugins.TinymceThumbnailGalleryPlugin)}());