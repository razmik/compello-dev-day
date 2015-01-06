;
(function () {

    function bind() {


        $(document).on('pageinit', '#home-page', function () {
            $(document).on('swipeleft swiperight', '#home-page', function (e) {
                if (!e.handled) {
                    if ($.mobile.activePage.jqmData('panel') !== 'open') {
                        if (e.type === 'swiperight') {
                            $('#left-panel').panel('open');
                            e.handled = true;
                        }
                    }
                }
                e.preventDefault();
            });
        });

        //        $(document).on('pageshow', '#invoice-page', function () {
        //            if (retrieveDefaultTab()) {
        //                showInvoicesAsList();
        //            }
        //        });
        //
        //        //Bind Refresh invoice actions
        //        $('#invoice-page').on('tap', '#invoice-page-refresh-button', function (e) {
        //            if (!e.handled) {
        //                refreshInvoices();
        //                e.handled = true;
        //            }
        //            return events.cancel(e);
        //        });
    }

    bind();

})();