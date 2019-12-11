/*!
 * jQuery goshare v1.0
 * 
 * Copyright (c) 2015 Omar Nazzal */
(function ($) {

    $.fn.goshare = function () {
         $('body').append('<div id="social" style=" height:32px; position:absolute; left:-999px; top:-999px;-webkit-transition: opacity 0.8s ease;transition: opacity 0.8s ease;-moz-transition: opacity 0.8s ease;opacity:0.1;"><a id="goshare-facebook" style="float:left; margin-right:4px; display:block; cursor:pointer;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADnklEQVRYR8WXW0iUQRSA58z8rq5aSVhuFyhFMLpZWnmpIAokCiKi1XW1jNBu0EsUElQYXcguTz2UGrmiZbUkvdiDYA9RrpW3hzKCsAtEkhVFtrq7zkwzW7v8Xv9Z0/qf/p85Z853zpxz/jOAFJ+kLaVTYswzNwOGDcBRMscoHjhMk+oc+Hdg6A0D6ABOG3/Q6PoXzuxela3BSCjFei3RpGnFwpgdCEQayct1xthPAHSDoLDSRzfzusbSGRVg/rqSCMvseSXA8SHhdZiK4aEynDMv4+jSl2etJ1+/vuwZaY8RAdbYbyT4mLeOEJI8HsPDQXh7n9u9rePe/rdD14YBpForl5g03CC8tkyE8cAelLGPlA1ktdwufK7fdxCA9JwibxMAiZtI43oIT19fpj4SQQB55nGWec2hhD1hbgw6YEtBKQstKNxEgsyr86tH5eeUtvW0tGUGciIIkG6vPIeBFKt6Hi+Ml5dsRJERw/NzLIA/VXKmuXbXMfnuB5ClFq6FdYaS7RcPr0cZy+aMyGsEIKuD+nwLnjqL3vgB0nMdFRjjQlXvpdyD6/ZBYdfrGgFIWc54mau2YB/IDjc90tKt2mQChh7X7BjEu/tYPXr19quyD4yzXvfnHguk5VTaiEZqlTX/COoBmOg2a3fWhLoF4hxlw3jCLy1NCIA4BsiwOZ4CwSuN8AkB9LAq30jMv66SA1KOUtYM6XZHDwYca7TzZABwxj5BRm6VV6X8JgVAlOP/B1A9gqFHNDFJKI9AMQknA8CfhGm5VeUEQ5FREk4GgGhGVyHddj0HE+3W/wCgdMAKi6x3oqdo7m7xL4gKBeJvc0C2Yl+0J87/M8qwO8oA8J5/DHCl+eauA36A35OQ76WAMKlC/E0EGOceT78vqb2u8F1wIEnLdZwlGB/9FwCc8lOuWwUnpK0gQGLiwfAZq1a4AGC5CsR4I8Ape+aikWuQM9s7CEB+LNt6ZX642dwkIjHLCEK2Zv1DKTdSQcLzD17an9nq3Ps+IDxsLF+Rc20xwVqDCoShRZ2ANM4ozXri3N2p1xvxYiIjYY6IuAuEpIRiZDRZGXYv9WzXez5qBAILMidiV6YeF3e8I6FUhx5CZru4tJ53UfPpwJkPhTS8nK6yVsQTzVQsbsB5Ym6IVomIbDJCrtrTP1AqS20sHUOAgPLSrAtRUbFxm8Qgt0F4lowBJYgaivGvc/RNjIVdgFGHGDIaB6b67reW73WrwP4Cnv+sj8M+CaYAAAAASUVORK5CYII=" alt="social icon"/></a><a id="goshare-twitter" style="float:left; margin-right:4px; display:block; cursor:pointer;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHdJREFUWIW1l0tsVGUUx3/fuXdmOn1PC5QCaaE2lmhwxEQDBTWlwqIkLoyRKCYaFyxY6qJhIYEQNCVhZ2Lcio/ERIwLarDWokHQELBBRIxk+uBRmkI7hc50nudzQVtn2unMUOG/uvee853//57vO+fcaygSLafHKiJJz06jtBujQZR1ClUAApMIAxbpB3pjJn5irK1uqpi4ppDDmr5ws1E6jeENoLRIvRFV/VysdA1vrw4tSUBjny2xOnlArb4rIp4iibOgaEIwR72xqoNXOyRetICGnnCTdThuILgU4gVCLL87Yl8ZagsMFhSw5tSdDaTkexGz8mGQz4lQO4KjO6631V5aVEBDT7hJHT0jSN3DJM8U4Ti0ZmZCZi8a+2yJdTj+qMgBREx92pqvm7vVt0CA1ckD/2fPl3kNm6pdnqpwcPPUlsAzCd/k+7P3Bu6XGmm9nHnayxzDc9UOfXdSeYldA/ub/by52oszQ3wzrnRemebatNKxwsPxW0lG4jq3RtGEOGb98IuBAQEwSuf8UtsccPnoiVKeLHfyCjjc4uetNf+RA6zyCceCZZzaVEGtxxBJ23lZEC8p2wkgLafHKmaaTBaWew3lruHLjWU8X+PmJG/0C7vqvYuKi6klWOmyOZBjvZXddSdHyiSS9OwkR4cbid1PWZVrOBYs48h6P6tKJMtnY6WTt5V6jOGzG3FOjiUXGoVyn+vvcI3SnivKmXCKW3FlpU8wwK56L6+u9PJrOMUvEymuRpXm0vzbM5pQvhnNQT4HbXeN0WBGMcyhye9wdCDOhy3+uVPtGNgScNmSK6U5EMl/frHWBAVlXS7j42XCkfV+rM1lLQ7XY5rXbsU2yexInY+eOylG44pnYXKKxoW7BVIA1YuGn05b9v4ZZSq19BT03C4oABGYXMx4YTLNvr+nCUXzpzIXzk+m+WsqXcgtLAgDi1ktsHOFh6bSB9+HrlCsoI9RE5KZz6hF8d6Vac5OFE5lJj69keC3cOE1RugXoDef01TK8np/hD1/RPl5vHDQ0xMpDv4zXZxSQ6/ETPwEEMnnt8xr2FDh8GxV/sbz3ViSdy5GKOrcKlPJe9Hu+9Pwh/FPRGRPpr291uWFGg8bKhyernSyhs18TCQtR0IxvriZKIJ5Fvbj4W2BvS6AWOlS9G1B5iZL33gKnxjW+oWUZYEAtXDxXppvR5N8dSvxQOWqaNy1dEHGJ1nDjxMfgNmXa4FH4DG/w3KfQYDxpCUU1QVjtlhY7KFr2wL7swQ0d6sv5rt7VgwblxS1aOi58tuBrZdfM4ksAQCNfRNr02nOiJj6R8R+w01ra2h7zfDsg6wOM9QWGMTRHap25FGQo7Ijk3yBAIDrbbWXHIdWhQsPj1vPuWltHX6p8vJ8S84eO9QWGCyJVbZi7WFFH6S2smnRuMUeKr8d2Dr/zWdR8Oe04aeJdaRsJ1Z2I5QXyTyF2GNibddge81QPteCAmZRd3KkzOf6O0DbrTVBK7YJqJ4xh42akBH6MfQm70W7R15eHS0m7r+sALJDF9ZQfQAAAABJRU5ErkJggg==" alt="social icon"/></a><a id="goshare-search" style="float:left; margin-right:4px; display:block; cursor:pointer;"><img src="data:image/png;base64,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" alt="social icon"/></a><a id="goshare-translate" style="float:left; margin-right:4px; display:block; cursor:pointer;"><img src="data:image/png;base64,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" alt="social icon"/></a><br style="clear:both;"/></div>');

        $('#goshare-search').click(function () {
            var selection = getSelected();
            window.open('https://www.google.com/search?q=' + selection, '_blank');
            HideGoShar();
            return false;
        });

        $('#goshare-translate').click(function () {
            var selection = getSelected();
            window.open('https://translate.google.com/#auto/ar/' + selection, '_blank');
            HideGoShar();
            return false;
        });

        $('#goshare-facebook').click(function () {
            var selection = getSelected();
            var fbPop = window.open("https://www.facebook.com/sharer/sharer.php?u=" + location.href, "", "width=600,height=400");
            HideGoShar();
            return false;
        });

        $('#goshare-twitter').click(function () {
            var selection = getSelected();
            var twPop = window.open("https://twitter.com/intent/tweet?&text=" + selection + "&url=" + location.href, "", "width=600,height=400");
            HideGoShar();
            return false;
        });

        function getSelected() {
            if (window.getSelection) { return window.getSelection(); }
            else if (document.getSelection) { return document.getSelection(); }
            else {
                var selection = document.selection && document.selection.createRange();
                if (selection.text) { return selection.text; }
                return false;
            }
            return false;
        }

        function HideGoShar() {
            $("#social").css({ left: "-999px", top: "-999px", opacity: 0.1 });
            return false;
        }

        $(document).ready(function () {
            $(this).mouseup(function () { 
                var selection = getSelected();
                var e = window.event;
                var posX = e.clientX;
                var posY = e.clientY;
                posX = posX + 10;
                posY = posY + 10;
                if (selection == "") { HideGoShar(); }
                else { $("#social").css({ left: posX, top: posY, opacity: 1 }); }
                //                if (selection && (selection = new String(selection).replace(/^\s+|\s+$/g, ''))) {
                //                    $.ajax({
                //                        type: 'post',
                //                        url: 'translate-plugin.aspx/Translate',
                //                        data: 'selection=' + encodeURI(selection)
                //                        
                //                    });

                //                }

            });
        });
        return this;
    };

} (jQuery));
