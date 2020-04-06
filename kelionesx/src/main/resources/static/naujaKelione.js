	function kelionesCrud(){
	
		pasiimtiKeliones();
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
						alert ( data );
						$( this ).dialog( "close" );
					});
				},
				Atsaukti: function() {
					$( this ).dialog( "close" );
				}
			}
		});
		
		dialog = $( "#dialog-form" ).dialog({
			autoOpen: false,
			height: 400,
			width: 350,
			modal: true,
			buttons: {
				"Sukurti": addKelione,
				Atsaukti: function() {
					dialog.dialog( "close" );
				}
			},
			close: function() {
				form[ 0 ].reset();
				allFields.removeClass( "ui-state-error" );
			}
		});
		form = dialog.find( "form" );
		function keistiBusena( id_keliones, busena) {
			params_str = 'id=' + id_keliones;
			if (busena == 'trinti'){
				trintidialog.dialog( "open" );
				$('#pav_keliones').val(pav_keliones);			
			}
			if (busena == 'redaguoti'){
				dialog.dialog( "open" );
				$( '#pav_veiksmo' ).html ( 'Redaguojamas irasas' );
				$('#id').val(id_keliones);
				$( '#pav' ).val(pav_keliones);
				$( '#apras' ).val(apras_keliones);
				$( '#kaina' ).val(kaina_keliones);
				$( '#trukmeVal' ).val(trukme_val_keliones);
				if ( flag_Poilsines == 1){
					$('#flagPoilsines').prop('checked', true);}
				if ( flag_Pazintines == 1){
					$('#flagPazintines').prop('checked', true);}
				if ( flag_Viskas_Isk == 1){
					$('#flagViskasIsk').prop('checked', true);}
				if ( flag_Laisv_Pasir == 1){
					$('#flagLaisvPasir').prop('checked', true);}
				
			}
			pasiimtiKeliones();
		
		}
		$( "#create-kelione" ).button().on( "click", function() {
	
			$( '#pav_veiksmo' ).html ( 'Kuriamas naujas irasas' );
				dialog.dialog( "open" );
		});
		function pasiimtiKeliones() {
			
			alert ("Kelioniu sarasas");
		
			$.ajax( '/ajax/lst-keliones' 
				
															/*
															, beforeSend: function( xhr ) {
																xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
															}
															*/
			)
			.done(
					function( data ) {
															// alert ( 'jquery ok ' + data );
						res_str = '<table>'
								+ '<tr><th rowspan="1">id</th><th rowspan="1">pavadinimas</th><th rowspan="1">aprasymas</th><th rowspan="1">kaina</th><th rowspan="1">trukme val</th><th rowspan="1">Poilsines</th><th rowspan="1">Pazintines</th><th rowspan="1">Viskas iskaiciuota</th><th rowspan="1">Laisvai pasirenkama</th><th>veiksmai</th></tr>';
						
						for ( i = 0; i < data.length; i++) {
							res_str += '<tr data-id="' + data [ i ].id  + '" data-pav="' + data [ i ].pav + '" data-apras="' + data [ i ].apras + '" data-kaina="' + data [ i ].kaina + '" data-trukmeVal="' + data [ i ].trukmeVal + '" data-flagPoilsines="' + data [ i ].flagPoilsines +'" data-flagPazintines="' + data [ i ].flagPazintines + '" data-flagViskasIsk="' + data [ i ].flagViskasIsk + '" data-flagLaisvPasir="' + data [ i ].flagLaisvPasir +  '">'
								+ '<td>' + data [ i ].id + '</td>' 
								+ '<td>' + data [ i ].pav + '</td>'
								+ '<td>' + data [ i ].apras + '</td>'
								+ '<td>' + data [ i ].kaina + '</td>'
								+ '<td>' + data [ i ].trukmeVal + '</td>'
								+ '<td>' + data [ i ].flagPoilsines + '</td>'
								+ '<td>' + data [ i ].flagPazintines + '</td>'
								+ '<td>' + data [ i ].flagViskasIsk + '</td>'
								+ '<td>' + data [ i ].flagLaisvPasir + '</td>'
								+ '<td><input type="button" class="trinti" value="trinti">'
								+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
								;

							res_str += '</tr>';
						}
						
						res_str += '</table>'
						$( '#keliones' ).html ( res_str );
						
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
								kaina_keliones = $( this ).parent().parent().data ('kaina');
								trukme_val_keliones = $( this ).parent().parent().data ('trukmeVal');
								flag_Poilsines = $( this ).parent().parent().data ('flagPoilsines');
								flag_Pazintines = $( this ).parent().parent().data ('flagPazintines');
								flag_Viskas_Isk = $( this ).parent().parent().data ('flagViskasIsk');
								flag_Laisv_Pasir = $( this ).parent().parent().data ('flagLaisvPasir');

								keistiBusena ( id_keliones, 'redaguoti' );
							});
						});
					}
			);		
		}
		
		function addKelione() {
			
			alert ( 'Saugoma ' );
			/*var valid = true;
			allFields.removeClass( "ui-state-error" );
			valid = valid && checkLength( pav, "Keliones pavadinimo", 1, 30 );
			if ( valid ) {
				alert ( 'submitinam ..'  + pav.val() );
		
				dialog.dialog( "close" );
			}
			return valid;*/
			nauja_kelione= {
				id: $('#id').val()
				, pav: $( '#pav' ).val()
				, apras: $('#apras').val()
				, kaina:  $( '#kaina' ).val() 
				, trukmeVal:  $( '#trukmeVal' ).val() 
				, flagPoilsines:  $( '#flagPoilsines' ).val() 
				, flagPazintines:  $( '#flagPazintines' ).val()
				, flagViskasIsk:  $( '#flagViskasIsk' ).val()
				, flagLaisvaiPasir:  $( '#flagLaisvaiPasir' ).val()

			}
			
			// alert ( 'miestas ' + miestas.pav + ' ' );
			
			params_str = 
				"id=" + nauja_kelione.id
				+ "&pav="  + nauja_kelione.pav
				+ "&apras=" + nauja_kelione.apras
				+ "&kaina=" + nauja_kelione.kaina
				+ "&trukmeVal=" + nauja_kelione.trukmeVal
				+ "&flagPoilsines=" + nauja_kelione.flagPoilsines
				+ "&flagPazintines=" + nauja_kelione.flagPazintines
				+ "&flagViskasIsk=" + nauja_kelione.flagViskasIsk
				+ "&flagLaisvPasir=" + nauja_kelione.flagLaisvPasir
				
			alert ( "/ajax/saugoti-kelione?" + params_str );
				
			$.ajax(
				 "/ajax/saugoti-kelione?" + params_str
				)

			.done( function( data ) {
				
				alert ( data );
				$( this ).dialog( "close" );	
				pasiimtiKeliones();
				/*$('#id').val('0');
				$( '#pav' ).val('');
				$('#apras').val('');
				$( '#kaina' ).val('');
				$( '#trukmeVal' ).val('');
				$( '#flagPoilsines' ).val('');
				$( '#flagPazintines' ).val('');
				$( '#flagViskasIsk' ).val('');
				$( '#flagLaisvPasir' ).val('');*/
				
			});
		}
	}