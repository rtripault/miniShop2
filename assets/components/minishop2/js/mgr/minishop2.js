var miniShop2 = function(config) {
	config = config || {};
	miniShop2.superclass.constructor.call(this,config);
};
Ext.extend(miniShop2,Ext.Component,{
	page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {},view: {},keymap: {}
});
Ext.reg('minishop2',miniShop2);

miniShop2 = new miniShop2();

miniShop2.PanelSpacer = { html: '<br />' ,border: false, cls: 'minishop2-panel-spacer' };