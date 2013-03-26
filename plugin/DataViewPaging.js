/**
 * Implementation for infinite scrolling on DataView.
 * It extends Ext.Plugin.ListPaging and adapt it to a DataView.
 * 
 * @author Gian Luca Dalla Torre <gianluca@gestionaleauto.com>
 * 
 * For instruction on how to use it, please refer to the ListPaging plugin source.
 */
Ext.define('Ext.plugin.DataViewPaging', {
    extend: 'Ext.plugin.ListPaging',
    alias: 'plugin.dataviewpaging',
    
    config:{
        /**
         * @cfg {Object} loadMoreCmp
         * @private
         */
        loadMoreCmp: {
            xtype: 'component',
            baseCls: Ext.baseCSSPrefix + 'list-paging',
            hidden: true
        }        
    },
    
    /**
     * @private
     */
    onStoreLoad: function(store) {
        var loadCmp  = this.getLoadMoreCmp(),
            template = this.getLoadTpl(),
            message  = this.storeFullyLoaded() ? this.getNoMoreRecordsText() : this.getLoadMoreText(),
            container =  this.getList().container;

        if (store.getCount()) {
            container.add(loadCmp);
            loadCmp.show();
        }
        this.setLoading(false);

        //if we've reached the end of the data set, switch to the noMoreRecordsText
        loadCmp.setHtml(template.apply({
            cssPrefix: Ext.baseCSSPrefix,
            message: message
        }));
    }    
});