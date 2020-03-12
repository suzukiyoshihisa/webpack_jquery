import log from "./modules/log";
import "../scss/style.scss";

const message = "hello world webpack";

//consoleへの表示
log("message");

//jqueryによる値段の表示
$(".title").text(message);
