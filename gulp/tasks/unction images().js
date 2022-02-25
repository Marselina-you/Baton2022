function images() {
    return src('app/images/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ]
        ))
        .pipe(dest('dist/images'))





}




.pipe(imagemin({
            progressive: true, //mozjpeg
            svgoPlugins: [{ removeViewBox: false }], //svgo
            interlaced: true, //gifsicle
            optimizationLevel: 3, //0 to 7 optipng
            }))

interlaced: true, //gifsicle

 progressive: true, //mozjpeg
 svgoPlugins: [{ removeViewBox: false }], //svgo


 import  imageminGifSicle from 'imagemin-gifsicle';
import  imageminOptiPng from 'imagemin-optipng';

import  imageminSvgo from 'imagemin-svgo';
 imagemin.mozjpeg({progressive: true}), //mozjpeg