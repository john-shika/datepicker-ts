#!python3

from datetime import datetime, timezone

date_string = "2308-11-22T00:00:00.000Z"
date_format = "%Y-%m-%dT%H:%M:%S.%fZ"

parsed_date = datetime.strptime(date_string, date_format)
print(parsed_date.weekday())
