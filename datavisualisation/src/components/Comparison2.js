<div class="row">
<div class="col-md-5">

  <div class="planet-name-div row">
    <h2 class="agency-top">
     Analysis of Space Agencies
    </h2>
  </div>

  <div class="row planet-info-main">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
</ol>
<div class="carousel-inner carousel">
<div class="carousel-item active">

<img src={this.nasa} class="logo" />
</div>
<div class="carousel-item">
<img src={this.isro} class="logo" />
</div>
<div class="carousel-item">
<img src={this.csa} class="logo" />
</div> 
<div class="carousel-item">
<img src={this.roscosmos} class="logo" />
</div> 
</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>

</div>    
  </div>
</div>

<div class="col-md-7 planet-right">
<div class="dashbg">
< div class="row">
<div class="col-md-12 ">
<Bar
  data={this.state.databar1}
  width='700px'
  height='200px'
  options={{
    scales: {
      xAxes: [
        {
          barThickness: 36, // number (pixels) or 'flex'
          maxBarThickness: 50 // number (pixels)
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: true
  }}
/>
</div>


</div>
< div class="row">
<div class="col-md-12 ">
<Line
  data={this.state.data1}
  width='700px'
  height='200px'
  options={{
    scales: {
      xAxes: [
        {
          barThickness: 36, // number (pixels) or 'flex'
          maxBarThickness: 50 // number (pixels)
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: true
  }}
/>
</div>

  < div class="row">
<div class="col-md-12 ">
{/* third graph */}
</div>


</div>


</div>

</div>

</div>

{/*End .border-div*/}
</div>
