# Sencha Touch 2 DataView Paging Plugin

This is a rough implementation for paging/infinite scrolling for Sencha Touch 2.x DataView.

Since the framework provides only a List implementation for this plugin, I extended the **Ext.plugin.ListPaging** to obtain the same effect on Dataview.

Please consider that is only a bare implementation. Feel free to improve the code.

## Documentation

This plugin is *Ext.plugin.ListPaging* twin sister.

To use this plugin you can add this code to your DataView:


	plugins: [
                    {
                        xclass: 'Ext.plugin.DataViewPaging',
                        autoPaging: true'
                    }
                ]


and, after this, you could refer to [Sencha Touch Docs on ListPaging Plugin](http://docs.sencha.com/touch/2-1/#!/api/Ext.plugin.ListPaging).