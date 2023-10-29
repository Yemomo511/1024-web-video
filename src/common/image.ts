import pause from "~assets/icon/slider/pause.svg";
import volume from "~assets/icon/slider/volume.svg";
import dammu from "~assets/icon/slider/dammu.svg";
import dammuConfig from "~assets/icon/slider/dammuConfig.svg";
import FullScreen from "~assets/icon/slider/fullScreen.svg";
import play from "~assets/icon/slider/play.svg";
import comment from "~assets/icon/Check/comment.svg";
import star from "~assets/icon/Check/star.svg";
import share from "~assets/icon/Check/share.svg";
import logo from "~assets/icon/Header/logo.svg"
import index from "~assets/icon/Nav/index.svg"
import follow from "~assets/icon/Nav/userFocus.svg"
import hot from "~assets/icon/Nav/hot.svg"
import game from "~assets/icon/Nav/game.svg"
const imageUrl = {
//改为import from引入
    video: {
        pause,
        volume,
        dammu,
        dammuConfig,
        FullScreen,
        play
    },
    check:{
        comment,
        star,
        share
    },
    header:{
        logo
    },
    nav:{
        index,
        follow,
        hot,
        game
    }
};
export default imageUrl