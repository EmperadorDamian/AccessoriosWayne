$(document).ready(function() {
    $(".categoryItem").click(function() {
        var catProduct = $(this).attr("category");
        console.log(catProduct);

        $('.product-item').css('transform', 'scale(0)');

        function hideProduct() {
            $('.product-item').hide();
        }
        setTimeout(hideProduct, 200);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct() {
            $('.product-item[category="' + catProduct + '"]').show();
            $('.product-item[category="' + catProduct + '"]').css('transform', 'scale(1)');
        }
        setTimeout(showProduct, 200);
        $('.categoryItem[category="all"]').click(function() {
            function showAll() {
                $('.product-item').show();
                $('.product-item').css('transform', 'scale(1)');
            }
            setTimeout(showAll, 200);
        });
    })
});