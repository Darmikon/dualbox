## Dualbox.js ##


This is jQuery widget for connected lists

Bower

    bower i dualbox

Demo
[http://front-back.net/portfolio/ui/dualbox/](http://front-back.net/portfolio/ui/dualbox/ "Demo")


----------

Markup

    <div class="dual">
	    <div class="row">
	        <div class="grid-5 source">
	
	            <div data-value="1" class="option">
	                Clusterization by category
	            </div>
	
	            <div data-value="2" class="option">
	                Clusterization by category and price
	            </div>
	
	            <div data-value="3" class="option">
	                Clusterization by partial attributes (using simple equality comp
	            </div>
	
	            <div data-value="4" class="option">
	                Clusterization by partial attributes (using Levenshtein distance)
	            </div>
	
	            <div data-value="5" class="option">
	                Clusterization by partial attributes (using normalized Levenshtein distance)
	            </div>
	
	        </div>
	
	
	        <div class="grid-2 controllers">
	            <button class="move-right">&gt;</button>
	            <button class="move-left">&lt;</button>
	            <button class="move-right-all">&gt;&gt;</button>
	            <button class="move-left-all">&lt;&lt;</button>
	        </div>
	
	        <div class="grid-5 chosen"></div>
	    </div>
	</div>

Initialization

    <link rel='stylesheet' type='text/css' href='screen.css' />
    <script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="dualbox.js"></script>
    <script type="text/javascript">
    	jQuery(document).ready(function($) {
		
    		$('.dual').dualbox();

    		//to get values of chosen elements
    		//$('.dual').data('value');  //null||[val1,val2...]
    	});
    </script>
    