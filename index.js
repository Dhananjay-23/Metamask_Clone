$(".ad").on("click",function()
{
    $(".ad").hide("slow");
});

$("#light").on("click",function()
{
    $("body").toggleClass("blight").toggleClass("bdark");
    $(".d").toggleClass("ddlight").toggleClass("ddark");
    $(".home").attr("src","home-hero-dark.webp");
    $(".txt").toggleClass("txtl").toggleClass("txtd");
    $(".desc").toggleClass("descl").toggleClass("descd");
    $(".chotu").toggleClass("chl").toggleClass("chd");
    $(".t1").toggleClass("tl").toggleClass("td");
    $(".Features").toggleClass("featuresl").toggleClass("featuresd");
    $(".Support").toggleClass("Supportl").toggleClass("supportd");
    $(".About").toggleClass("aboutl").toggleClass("aboutd");
    $(".Build").toggleClass("buildl").toggleClass("buildd");
    // $(".drops").toggleClass("dl").toggleClass("dd");
});

$(".Features").hide();
$(".f").hover(function()
{
    $(".Features").show();
},function()
{
    $(".Features").hide();
});
$(".Support").hide();
$(".s").hover(function()
{
    $(".Support").show();
},function()
{
    $(".Support").hide();
});
$(".About").hide();
$(".a").hover(function()
{
    $(".About").show();
},function()
{
    $(".About").hide();
});
$(".Build").hide();
$(".b").hover(function()
{
    $(".Build").show();
},function()
{
    $(".Build").hide();
});


$(".body1").hide().fadeIn(2000);
$(".img1").hide().fadeIn(2000);
$(".body2").hide().fadeIn(3000);
$(".img2").hide().fadeIn(3000);
$(".body3").hide().fadeIn(4000);
$(".img3").hide().fadeIn(4000);
