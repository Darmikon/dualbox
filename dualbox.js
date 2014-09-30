    $.fn.extend({
        dualbox: function( opts ) {
            //default options
            opts = $.extend({
            }, opts);

            var move = {
                toChosenOne : function ($dom){
                    $dom.source.find('.selected').each(function() {
                        var $this = $(this);
                        $clone = $this.clone(true);
                        $dom.chosen.append($clone);
                        $this.remove();
                    });
                    updateValue($dom);
                },
                toChosenAll : function ($dom){
                    $dom.source.find('div').each(function() {
                        var $this = $(this),
                                $clone = $this.clone(true);
                        $clone.addClass('selected');
                        $dom.chosen.append($clone);
                        $this.remove();
                    });
                    updateValue($dom);
                },
                toSourceOne : function ($dom){
                    $dom.chosen.find('.selected').each(function() {
                        var $this = $(this),
                            $clone = $this.clone(true);
                        $dom.source.append($clone);
                        $this.remove();
                    });
                    updateValue($dom);
                },
                toSourceAll : function ($dom){
                    $dom.chosen.find('div').each(function() {
                        var $this = $(this),
                            $clone = $this.clone(true);
                        $clone.addClass('selected');
                        $dom.source.append($clone);
                        $this.remove();
                    });
                    updateValue($dom);
                }
            };

            var updateValue = function ($dom){
                var selected = [];
                $dom.chosen.find('div').each(function() {
                    var value = $(this).data('value');
                    if(value){
                        selected.push(value);
                    }
                });
                selected = selected&&selected.length ? selected : null;
                $dom.el.data('value',selected);
            };

            var setListeners = function ($dom, $controller){
                $dom.source.add($dom.chosen).on('click', '.option', function() {
                    $(this).toggleClass('selected');
                });

                $controller.right.on('click', function (e){
                    move.toChosenOne($dom);
                });

                $controller.rightAll.click(function(e) {
                    move.toChosenAll($dom);
                });

                $controller.left.click(function(e) {
                    move.toSourceOne($dom);
                });

                $controller.leftAll.click(function() {
                    move.toSourceAll($dom);
                });

                $('#dual-mock-check').click(function() {
                     alert($dom.el.data('value'));
                });
            };

            var init = function ($el){

                $el.data('value',null);

                var $dom = {
                    el : $el,
                    source : $el.find('.source'),
                    chosen : $el.find('.chosen')
                };

                var $controller = {
                    left : $el.find('.move-left'),
                    leftAll : $el.find('.move-left-all'),
                    right : $el.find('.move-right'),
                    rightAll : $el.find('.move-right-all')
                };

                setListeners($dom, $controller);

            };


            return this.each(function(){
                var $el = $(this);
                init($el);
                //do stuff here
//                if ( opts.my_option ) {
//                }
            });
        }
    });
