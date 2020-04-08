	function kelionesCrud(){
		var dialog, form;
		id_keliones = $( "#id" );
		pav_keliones = $( "#pav" );
		apras_keliones = $( "#apras" );
		flag_poilsines = $("#flagPoilsines");
		flag_pazintines = $("#flagPazintines");
		flag_viskas_isk = $("#flagViskasIsk");
		kaina_keliones = $("#kaina");
		trukme_val_keliones = $("#trukmeVal");
		allFields = $( [] ).add( id_keliones ).add( pav_keliones ).add( apras_keliones ).add( flag_poilsines ).add( flag_pazintines ).add( flag_viskas_isk ).add( kaina_keliones ).add( trukme_val_keliones );
		pasiimtiKeliones();
		dialog = $( "#dialog-form" ).dialog({
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
				form[ 0 ].reset();
				allFields.removeClass( "ui-state-error" );
			}
		});
		trintidialog = $( "#dialog-confirm" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
				"Istrinti irasa": function() {
					$.ajax('/ajax/salinti-kelione?' + params_str)
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
				form[ 0 ].reset();
				allFields.removeClass( "ui-state-error" );
			}
		});
		form = dialog.find( 'form' ).on ("submit", function(event){
			event.preventDefault();
			addKelione();
		});
		
		function keistiBusena( id_keliones, busena) {
			params_str = 'id=' + id_keliones;
			if (busena == 'trinti'){
				$('#pav_keliones').val(pav_keliones);
				trintidialog.dialog( "open" );				
			}
			if (busena == 'redaguoti'){
				
				$( '#pav_veiksmo' ).html ( 'Redaguojamas irasas' );
				$('#id').val(id_keliones);
				$( '#pav' ).val(pav_keliones);
				$( '#apras' ).val(apras_keliones);
				if ( flag_poilsines == 1){
					$('#flagPoilsines').prop('checked', true);
				} else {
					$('#flagPoilsines').prop('checked', false);}
				if ( flag_pazintines == 1){
					$('#flagPazintines').prop('checked', true);
				} else {
					$('#flagPazintines').prop('checked', false);}
				if ( flag_viskas_isk == 1){
					$('#flagViskasIsk').prop('checked', true);
				} else {
					$('#flagViskasIsk').prop('checked', false);}
				$( '#kaina' ).val(kaina_keliones);
				$( '#trukmeVal' ).val(trukme_val_keliones);
				dialog.dialog( "open" );
			}
		}

		function pasiimtiKeliones() {
			
			alert ("Kelioniu sarasas");
		
			$.ajax( '/ajax/lst-keliones' 
				
															/*
															, beforeSend: function( xhr ) {
																xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
															}
															*/
			)
			.done( function( data ) {
																		// alert ( 'jquery ok ' + data );
				res_str = '<table>'
						+ '<tr>'
							+ '<th>Id</th>'
							+ '<th>Pavadinimas</th>'
							+ '<th>Aprasymas</th>'
							+ '<th>Poilsines</th>'
							+ '<th>Pazintines</th>'
							+ '<th>Viskas iskaiciuota</th>'
							+ '<th>Kaina</th>'
							+ '<th>Trukme val</th>'
							+ '<th>Veiksmai</th>'
						+ '</tr>';
				for ( i = 0; i < data.length; i++) {
					
					res_str += '<tr data-id="' + data [ i ].id  
						+ '" data-pav="' + data [ i ].pav 
						+ '" data-apras="' + data [ i ].apras 
						+ '" data-kaina="' + data [ i ].kaina 
						+ '" data-trukmeVal="' + data [ i ].trukmeVal 
						+ '" data-flagPoilsines="' + data [ i ].flagPoilsines 
						+ '" data-flagPazintines="' + data [ i ].flagPazintines 
						+ '" data-flagViskasIsk="' + data [ i ].flagViskasIsk 
						+ '">'
						+ '<td>' + data [ i ].id + '</td>' 
						+ '<td>' + data [ i ].pav + '</td>'
						+ '<td>' + data [ i ].apras + '</td>'
						+ '<td>'
						+ '<input type="checkbox" name="flagPoilsines" id="flagPoilsines" value="' + data [ i ].flagPoilsines + '">'
						+ '</td>'
						+ '<td>' 
						+ '<input type="checkbox" name="flagPazintines" id="flagPazintines" value="' + data [ i ].flagPazintines + '">'
						+ '</td>'
						+ '<td>'
						+ '<input type="checkbox" name="flagViskasIsk" id="flagViskasIsk"" value="' + data [ i ].flagViskasIsk + '">'
						+ '</td>'
						+ '<td>' + data [ i ].kaina + '</td>'
						+ '<td>' + data [ i ].trukmeVal + '</td>'
						+ '<td><input type="button" class="trinti" value="trinti">'
						+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
						;

					res_str += '</tr>';
				}
				res_str += '</table>';
				$( '#keliones' ).html ( res_str );
				$( "#create-kelione" ).button().on( "click", function() {
					$( '#pav_veiksmo' ).html ( 'Kuriamas naujas irasas' );
					$( '#id' ).val ( '0' );
					dialog.dialog( "open" );
				});
				$( '.trinti' ).on ( 'click', function() {
						
					$( this ).each ( function() {
						
						id_keliones = $( this ).parent( ).parent().data ( 'id' );

						keistiBusena ( id_keliones, 'trinti' );
					});
				});
				
				$( '.redaguoti' ).on ( 'click', function() {
				
					$( this ).each ( function() {
						
						id_keliones = $( this ).parent( ).parent().data ( 'id' );
						pav_keliones = $( this ).parent().parent().data ('pav');
						apras_keliones = $( this ).parent().parent().data ('apras');
						flag_Poilsines = $( this ).parent().parent().data ('flagPoilsines');
						flag_Pazintines = $( this ).parent().parent().data ('flagPazintines');
						flag_Viskas_Isk = $( this ).parent().parent().data ('flagViskasIsk');
						kaina_keliones = $( this ).parent().parent().data ('kaina');
						trukme_val_keliones = $( this ).parent().parent().data ('trukmeVal');
						keistiBusena ( id_keliones, 'redaguoti' );

					});
				});	
				
			});
		}			
				
				
		function addKelione() {
			
			alert ( 'Saugoma ' );

			nauja_kelione= {
				id: $('#id').val()
				, pav: $( '#pav' ).val()
				, apras: $('#apras').val()
				, flagPoilsines:  $( '#flagPoilsines' ).val() 
				, flagPazintines:  $( '#flagPazintines' ).val()
				, flagViskasIsk:  $( '#flagViskasIsk' ).val()
				, kaina:  $( '#kaina' ).val() 
				, trukmeVal:  $( '#trukmeVal' ).val() 
			}
			
			// alert ( 'miestas ' + miestas.pav + ' ' );
			
			params_str = 
				"id=" + nauja_kelione.id
				+ "&pav="  + nauja_kelione.pav
				+ "&apras=" + nauja_kelione.apras
				+ "&flagPoilsines=" + nauja_kelione.flagPoilsines
				+ "&flagPazintines=" + nauja_kelione.flagPazintines
				+ "&flagViskasIsk=" + nauja_kelione.flagViskasIsk
				+ "&kaina=" + nauja_kelione.kaina
				+ "&trukmeVal=" + nauja_kelione.trukmeVal

			alert ( "/ajax/saugoti-kelione?" + params_str );
				
			$.ajax(
				 "/ajax/saugoti-kelione?" + params_str
				)

			.done( function( data ) {
				
				dialog.dialog ("close");
				pasiimtiKeliones();
				/*$('#id').val('0');
				$( '#pav' ).val('');
				$('#apras').val('');
				$( '#flagPoilsines' ).val('');
				$( '#flagPazintines' ).val('');
				$( '#flagViskasIsk' ).val('');
				$( '#kaina' ).val('');
				$( '#trukmeVal' ).val('');
				*/
				
			});
			
		}
	}