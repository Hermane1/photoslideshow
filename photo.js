const photoSlideShow = {
    photoList:['photo1.jgp', 'photo2.jgp', 'photo3.jgp','photo4.jgp'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
    if(this.currentPhotoIndex < this.photoList.length - 1 ) {
        this.currentPhotoIndex++;
        console.log(this.getCurrentPhoto());
}else{
    console.log('End of slideshow');
}
},
prevPhoto: function() {
    if(this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(this.getCurrentPhoto());
        }else{
            console.log('Start of slideshow');
}
},
getCurrentPhoto: function() {
    return this.photoList[this.currentPhotoIndex];
    },
}
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();