const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);

class DateUtil {

    // All supported input formats
    static inputFormats = [
        "DD/MM/YYYY",
        "DD-MM-YYYY",
        "YYYY-MM-DD",
        "DD-MMM-YYYY",
        "DD-MMMM-YYYY"
    ];

    // String -> Day.js Date
    static toDate(dateStr) {
        if (!dateStr) return null;

        const d = dayjs(dateStr, this.inputFormats, true);

        if (!d.isValid()) {
            throw new Error("Invalid Date Format: " + dateStr);
        }

        return d;
    }

    // Date/String -> formatted string
    static format(dateInput, format = "DD-MM-YYYY") {

        const d = dayjs.isDayjs(dateInput)
            ? dateInput
            : this.toDate(dateInput);

        return d.format(format);
    }

    // Convert any format -> any format
    static convert(dateStr, toFormat) {

        const d = this.toDate(dateStr);

        return d.format(toFormat);
    }

    // Current date
    static now(format = "DD-MM-YYYY") {
        return dayjs().format(format);
    }
}

module.exports = DateUtil;