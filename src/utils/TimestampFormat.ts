
import TimeAgo from 'javascript-time-ago'
import dateFormat from "dateformat";

import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

class TimestampFormat {

    static intraDay = (timestamp: number) => {
        return ((Date.now() / 1000) - timestamp < 86400 ?
                timeAgo.format(timestamp) :
                dateFormat(timestamp, '"at" h:mm TT "on" mmm d, yyyy')
        )
    }

}

export default TimestampFormat
