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
    }
    bind();
    
})();