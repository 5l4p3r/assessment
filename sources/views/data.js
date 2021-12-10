import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView{
	config(){
		var ui = {
			view: "datatable",
			id: "dtable",
			css: "webix_header_border",
			scroll:false,
			autoheight:true,
			autowidth:true,
			columns: [
				{
					id: "title",
					header:[{text:"Film Title"}],
					width:400
				},
				{
					id:"sparator",
					header:[{text:""}],
					autowidth:true
				},
				{
					id: "release",
					header:[{text:"Release"}]
				},
				{
					id: "budget",
					header:[{text:"Budget"}]
				},
				{
					id: "votes",
					header:[{text:"Votes"}]
				},
				{
					id: "rating",
					header:[{text:"Rating"}]
				},
				{
					id: "category",
					header:[{text:"Category"}]
				},
				{
					id: "rank",
					header:[{text:"Rank"}]
				}
			],
			ready(){
				$$("menu").attachTo($$("dtable"));
			}
		}
		var title = true;
		function toggletitle(spans){
			var column = "title";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans});
			}else{
				$$("dtable").showColumn(column,{spans:spans});
			}
		}
		var release = true;
		function togglerelease(spans){
			var column = "release";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var budget = true;
		function togglebudget(spans){
			var column = "budget";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var votes = true;
		function togglevotes(spans){
			var column = "votes";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var rating = true;
		function togglerating(spans){
			var column = "rating";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var category = true;
		function togglecategory(spans){
			var column = "category";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var rank = true;
		function togglerank(spans){
			var column = "rank";
			if($$("dtable").isColumnVisible(column)){
				$$("dtable").hideColumn(column,{spans:spans})
			}else{
				$$("dtable").showColumn(column,{spans:spans})
			}
		}
		var datapop = [
			{icon:`${title?"wxi-eye":"wxi-eye-slash"}`,value:"Title"},
			{icon:`${release?"wxi-eye":"wxi-eye-slash"}`,value:"Release"},
			{icon:`${budget?"wxi-eye":"wxi-eye-slash"}`,value:"Budget"},
			{icon:`${votes?"wxi-eye":"wxi-eye-slash"}`,value:"Votes"},
			{icon:`${rating?"wxi-eye":"wxi-eye-slash"}`,value:"Rating"},
			{icon:`${category?"wxi-eye":"wxi-eye-slash"}`,value:"Category"},
			{icon:`${rank?"wxi-eye":"wxi-eye-slash"}`,value:"Rank"}
		]

		if(!$$("menu")){
			webix.ui( {
				view: "contextmenu",
				id: "menu",
				data: datapop,
				on: {
					onItemClick: function(id){
						var x = this.getItem(id).value
						if(x === "Title"){
							title = !title;
							toggletitle(title)
						}else if(x === "Release"){
							release = !release;
							togglerelease(release)
						}else if(x === "Budget"){
							budget = !budget;
							togglebudget(budget)
						}else if(x === "Votes"){
							votes = !votes;
							togglevotes(votes)
						}else if(x === "Rating"){
							rating = !rating;
							togglerating(rating)
						}else if(x === "Category"){
							category = !category;
							togglecategory(category)
						}else{
							rank = !rank;
							togglerank(rank)
						}
					}
				},
				afterSelect: function(){
					if(title){
						ict = "webix_icon wxi-eye";
					}else{
						ict = "webix_icon wxi-eye-slash";
					}
				}
			})
		}
		return ui;
	}

	
	
	init(view){
		$$("dtable").parse(data)
	}
}