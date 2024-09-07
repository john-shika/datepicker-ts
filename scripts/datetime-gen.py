#!python3


from datetime import datetime, timezone


def generate_datetime_range(start_year, end_year):
    results = []

    for year in range(start_year, end_year + 1, 100):

        dt = datetime(year, 1, 1, tzinfo=timezone.utc)
        timestamp = dt.timestamp()
        weekday = dt.weekday()
        results.append(dict(
            datetime=dict(
                year=dt.year,
                month=dt.month,
                day=dt.day,
                hour=dt.hour,
                minute=dt.minute,
                second=dt.second,
            ),
            weekday=weekday,
            timestamp=timestamp,
        ))

    return results


data = generate_datetime_range(1600, 3000)


for entry in data:

    year = entry["datetime"]["year"]
    weekday = entry["weekday"]
    timestamp = int(entry["timestamp"])

    print(f"year = {year} weekday = {weekday} timestamp = {timestamp}")
    