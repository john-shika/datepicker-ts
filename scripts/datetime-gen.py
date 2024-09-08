#!python3

from datetime import datetime, timezone


def generate_datetime_range(start_year: int, end_year: int, step_year: int):
    results = []

    for year in range(start_year, end_year + 1, step_year):

        dt = datetime(year, 1, 1, tzinfo=timezone.utc)
        timestamp = dt.timestamp() * 1000
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


def main():
    seeds = []
    for entry in reversed(generate_datetime_range(1970, 2020, 10)):

        year = entry["datetime"]["year"]
        weekday = entry["weekday"]
        timestamp = int(entry["timestamp"])
        
        fields = f"""\n    timedelta: new Timedelta({year}, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),\n    timestamp: {timestamp},\n    weekday: {weekday},\n    microseconds: 0,\n    timezone: TimeZone.UTC,\n"""
        seed = "  {" + fields + "  }"
        seeds.append(seed)
        
    data = """interface DateTimePreload {\n  timedelta: Timedelta;\n  timestamp: number;\n  weekday: number;\n  microseconds: number;\n  timezone: TimeZone;\n}\n\nexport const TIME_DELTA_SEEDS: DateTimePreload[] = [\n"""
    data += ",\n".join(seeds) + "\n]"
    print(data)

if str(__name__).upper() in ("__MAIN__",):
    main()
