Object.defineProperty(exports, "__esModule", { value: true });
var list_view_comp_1 = require("./directives/list-view-comp");
var tab_view_1 = require("./directives/tab-view");
var action_bar_1 = require("./directives/action-bar");
var platform_filters_1 = require("./directives/platform-filters");
exports.NS_DIRECTIVES = [
    list_view_comp_1.ListViewComponent,
    list_view_comp_1.TemplateKeyDirective,
    tab_view_1.TabViewDirective,
    tab_view_1.TabViewItemDirective,
    action_bar_1.ActionBarComponent,
    action_bar_1.ActionBarScope,
    action_bar_1.ActionItemDirective,
    action_bar_1.NavigationButtonDirective,
    platform_filters_1.AndroidFilterComponent,
    platform_filters_1.IosFilterComponent,
];
var list_view_comp_2 = require("./directives/list-view-comp");
exports.ListViewComponent = list_view_comp_2.ListViewComponent;
exports.TemplateKeyDirective = list_view_comp_2.TemplateKeyDirective;
var text_value_accessor_1 = require("./value-accessors/text-value-accessor");
exports.TextValueAccessor = text_value_accessor_1.TextValueAccessor;
var checked_value_accessor_1 = require("./value-accessors/checked-value-accessor");
exports.CheckedValueAccessor = checked_value_accessor_1.CheckedValueAccessor;
var date_value_accessor_1 = require("./value-accessors/date-value-accessor");
exports.DateValueAccessor = date_value_accessor_1.DateValueAccessor;
var time_value_accessor_1 = require("./value-accessors/time-value-accessor");
exports.TimeValueAccessor = time_value_accessor_1.TimeValueAccessor;
var number_value_accessor_1 = require("./value-accessors/number-value-accessor");
exports.NumberValueAccessor = number_value_accessor_1.NumberValueAccessor;
var selectedIndex_value_accessor_1 = require("./value-accessors/selectedIndex-value-accessor");
exports.SelectedIndexValueAccessor = selectedIndex_value_accessor_1.SelectedIndexValueAccessor;
var tab_view_2 = require("./directives/tab-view");
exports.TabViewDirective = tab_view_2.TabViewDirective;
exports.TabViewItemDirective = tab_view_2.TabViewItemDirective;
var action_bar_2 = require("./directives/action-bar");
exports.ActionBarComponent = action_bar_2.ActionBarComponent;
exports.ActionBarScope = action_bar_2.ActionBarScope;
exports.ActionItemDirective = action_bar_2.ActionItemDirective;
exports.NavigationButtonDirective = action_bar_2.NavigationButtonDirective;
var platform_filters_2 = require("./directives/platform-filters");
exports.AndroidFilterComponent = platform_filters_2.AndroidFilterComponent;
exports.IosFilterComponent = platform_filters_2.IosFilterComponent;
//# sourceMappingURL=directives.js.map