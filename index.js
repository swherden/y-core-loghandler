import winston from "winston";

const consoleTransport = new winston.transports.Console();

const myWinstonOptions = {
  transports: [consoleTransport],
};
const logger = new winston.createLogger(myWinstonOptions);

export function debugMsg(text, shop_domain, topic) {
  logger.debug(buildLogMessage(text, shop_domain, topic));
}

export default function log(text, shop_domain, topic) {
  logger.info(buildLogMessage(text, shop_domain, topic));
}

export function errorLog(text, shop_domain, topic) {
  logger.error(buildLogMessage(text, shop_domain, topic));
}

function buildLogMessage(text, shop_domain, topic) {
  let now = new Date();
  return "[" + now + "@" + shop_domain + "->" + topic + "] " + text;
}
