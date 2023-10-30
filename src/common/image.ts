import pause from "~assets/icon/slider/pause.svg";
import volume from "~assets/icon/slider/volume.svg";
import dammu from "~assets/icon/slider/dammu.svg";
import dammuConfig from "~assets/icon/slider/dammuConfig.svg";
import FullScreen from "~assets/icon/slider/fullScreen.svg";
import play from "~assets/icon/slider/play.svg";
import comment from "~assets/icon/Check/comment.svg";
import star from "~assets/icon/Check/star.svg";
import share from "~assets/icon/Check/share.svg";
import logo from "~assets/icon/logo.png"
import search from "~assets/icon/Header/search.svg"
import notice from "~assets/icon/Header/notice.svg"
import list from "~assets/icon/Header/list.svg"
import index from "~assets/icon/Nav/index.svg"
import follow from "~assets/icon/Nav/userFocus.svg"
import passVideo from "~assets/icon/Header/passVideo.svg"
import hot from "~assets/icon/Nav/hot.svg"
import game from "~assets/icon/Nav/game.svg"
import uploadVideo from "~assets/icon/Header/uploadVideo.svg"
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
        search,
        notice,
        list,
        passVideo,
        uploadVideo
    },
    nav:{
        index,
        follow,
        hot,
        game
    },
    logo:logo
};
export default imageUrl