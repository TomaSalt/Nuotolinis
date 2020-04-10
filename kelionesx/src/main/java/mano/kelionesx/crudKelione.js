class Kelione {
		
	constructor ( kelione ) {
		this.id = kelione.id;
		this.pav = kelione.pav;
		this.apras = kelione.apras; 
		this.flag_poilsines = kelione.flag_poilsines;
		this.flag_pazintines = kelione.flag_pazintines;
		this.flag_viskas_isk = kelione.flag_viskas_isk;
		this.kaina = kelione.kaina;
		this.trukme_val = kelione.trukme_val;
	}
	rezultatoEilute() {
		var checked1, checked2, checked3, res_eilute;
		if (this.flag_poilsines == 1){
			checked1 = "&check;";
		} else {
			checked1 = "&cross;";
		}
		if (this.flag_pazintines == 1){
			checked2 = "&check;";
		} else {
			checked2 = "&cross;";
		}
		if (this.flag_viskas_isk == 1){
			checked3 = "&check;";
		} else {
			checked3 = "&cross;";
		}
		res_eilute = '<tr data-id="' + this.id  
			+ '" data-pav="' + this.pav 
			+ '" data-apras="' + this.apras 
			+ '" data-flagpoilsines="' + this.flagPoilsines 
			+ '" data-flagpazintines="' + this.flagPazintines 
			+ '" data-flagviskasisk="' + this.flagViskasIsk
			+ '" data-kaina="' + this.kaina 
			+ '" data-trukmeval="' + this.trukmeVal 
			+ '">'
			+ '<td>' + this.id + '</td>' 
			+ '<td>' + this.pav + '</td>'
			+ '<td>' + this.apras + '</td>'
			+ '<td>'
			+ '<div>' + checked1 + '</div>'
			+ '</td>'
			+ '<td>' 
			+ '<div>' + checked2 + '</div>'
			+ '</td>'
			+ '<td>'
			+ '<div>' + checked3 + '</div>'
			+ '</td>'
			+ '<td>' + this.kaina + '</td>'
			+ '<td>' + this.trukmeVal + '</td>'
			+ '<td><input type="button" class="trinti" value="trinti">'
			+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
			;
		res_eilute += '</tr>';
		return res_eilute;
	}
	parametraiRedagavimui (){
		var parametrai =
		"id=" + this.id
		+ "&pav="  + this.pav
		+ "&apras=" + this.apras
		+ "&flagPoilsines=" + this.flagPoilsines
		+ "&flagPazintines=" + this.flagPazintines
		+ "&flagViskasIsk=" + this.flagViskasIsk
		+ "&kaina=" + this.kaina
		+ "&trukmeVal=" + this.trukmeVal
		return parametrai;
	}
	parametraiTrynimui (){
		var parametrai =	"id=" + this.id;
		return parametrai;
	}
	/*dialog (){
		var dialog = $("#dialog-form" ).dialog({
			autoOpen: false,
			height: "auto",
			width: 350,
			modal: true,
			buttons: {
				"Sukurti": function(){
					addKelione();
				},
				"Atsaukti": function() {
					$(this).dialog( "close" );
				}
			},
			close: function() {
				findform[ 0 ].reset();
				allFields.removeClass( "ui-state-error" );
			}
		}
		return dialog;	
	}*/
	trintidialog (){
		var trintidialog = $( "#dialog-confirm" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
				"Istrinti irasa": function() {
					$.ajax('/ajax/salinti-kelione?' + parametraiTrynimui())
					.done( function( data ) {
						trintidialog.dialog( "close" );
						pasiimtiKeliones();
					});
				},
				"Atsaukti": function() {
					$(this).dialog( "close" );
				}
			},
			close: function() {
				findform[ 0 ].reset();
				allFields.removeClass( "ui-state-error" );
			}
		});
		return trintidialog;
	}
	findform (){
		var form = dialog.find( 'form' ).on ("submit", function(event){
			event.preventDefault();
			addKelione();
		});
		return form;
	}
	void trintiKelione (){
		$('#pav_keliones').val(this.pav);
		trinti.dialog( "open" );
	}
	void redaguotiKelione (){
		$( '#pav_veiksmo' ).html ( 'Redaguojamas irasas' );
		$('#id').val(this.id);
		$( '#pav' ).val(this.pav);
		$( '#apras' ).val(this.apras);
		$( '#kaina' ).val(this.kaina);
		$( '#trukmeVal' ).val(this.trukme_val);
		if ( this.flag_poilsines == 1){
			alert("flag poilsines pazymeti");
			$("#flagPoilsines").prop('checked', true);
		} else {
			$("#flagPoilsines").prop('checked', false);
		}
		if ( this.flag_pazintines == 1){
			alert("flag pazintines pazymeti");
			$("#flagPazintines").prop('checked', true);
		} else {
			$("#flagPazintines").prop('checked', false);
		}
		if ( this.flag_viskas_isk == 1){
			alert("flag viskas iskaiciuota pazymeti");
			$("#flagViskasIsk").prop('checked', true);
		} else {
			$("#flagViskasIsk").prop('checked', false);
		}
		dialog.dialog( "open" );
	}

			$( '.trinti' ).on ( 'click', function() {
					
				$( this ).each ( function() {
					
					this.id = $( this ).parent( ).parent().data ( 'id' );

					trintiKelione();
				});
			});
			
			$( '.redaguoti' ).on ( 'click', function() {
			
				$( this ).each ( function() {
					
					this.id = $( this ).parent( ).parent().data ( 'id' );
					this.pav = $( this ).parent().parent().data ('pav');
					this.apras = $( this ).parent().parent().data ('apras');
					this.flag_poilsines = $( this ).parent().parent().data ('flagpoilsines');
					this.flag_pazintines = $( this ).parent().parent().data ('flagpazintines');
					this.flag_viskas_isk = $( this ).parent().parent().data ('flagviskasisk');
					this.kaina = $(this ).parent().parent().data ('kaina');
					this.trukme_val = $( this ).parent().parent().data ('trukmeval');
					alert("flag " + " " + flag_poilsines + " " + flag_pazintines + " " + flag_viskas_isk);
					redaguotiKelione();
					
				});
			});	
				
		});
		
	}
	addKelione() {
			
		alert ( 'Saugoma ' );


		alert ( "/ajax/saugoti-kelione?" + parametraiRedagavimui () );
			
		$.ajax(
			 "/ajax/saugoti-kelione?" + parametraiRedagavimui ()
			)

		.done( function( data ) {
			
			dialog.dialog ("close");
			pasiimtiKeliones();

		});
	}
}