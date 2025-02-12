<?php

use PHPUnit\Framework\TestCase;
use PrivateBin\Filter;

class FilterTest extends TestCase
{
    public function testFilterMakesTimesHumanlyReadable()
    {
        $this->assertEquals('5 minutes', Filter::formatHumanReadableTime('5min'));
        $this->assertEquals('90 seconds', Filter::formatHumanReadableTime('90sec'));
        $this->assertEquals('1 week', Filter::formatHumanReadableTime('1week'));
        $this->assertEquals('6 months', Filter::formatHumanReadableTime('6months'));
    }

    public function testFilterFailTimesHumanlyReadable()
    {
        $this->expectException(Exception::class);
        $this->expectExceptionCode(30);
        Filter::formatHumanReadableTime('five_minutes');
    }

    public function testFilterMakesSizesHumanlyReadable()
    {
        $this->assertEquals('1 B', Filter::formatHumanReadableSize(1));
        $this->assertEquals('1 000 B', Filter::formatHumanReadableSize(1000));
        $this->assertEquals('1.00 KiB', Filter::formatHumanReadableSize(1024));
        $this->assertEquals('1.21 KiB', Filter::formatHumanReadableSize(1234));
        $exponent = 1024;
        $this->assertEquals('1 000.00 KiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 MiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 MiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 MiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 GiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 GiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 GiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 TiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 TiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 TiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 PiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 PiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 PiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 EiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 EiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 EiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 ZiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 ZiB', Filter::formatHumanReadableSize(1234 * $exponent));
        $exponent *= 1024;
        $this->assertEquals('1 000.00 ZiB', Filter::formatHumanReadableSize(1000 * $exponent));
        $this->assertEquals('1.00 YiB', Filter::formatHumanReadableSize(1024 * $exponent));
        $this->assertEquals('1.21 YiB', Filter::formatHumanReadableSize(1234 * $exponent));
    }



    public function testFormatHumanReadableHour()
    {
        $this->assertEquals('1 hour', Filter::formatHumanReadableTime(3600));
        $this->assertEquals('2 hours', Filter::formatHumanReadableTime(7200));
        $this->assertEquals('1.5 hours', Filter::formatHumanReadableTime(5400));
    }

    public function testFormatHumanReadableDay()
    {
        $this->assertEquals('1 day', Filter::formatHumanReadableTime(86400));
        $this->assertEquals('2 days', Filter::formatHumanReadableTime(172800));
        $this->assertEquals('1.5 days', Filter::formatHumanReadableTime(129600));
    }

    public function testFormatHumanReadableYear()
    {
        $this->assertEquals('1 year', Filter::formatHumanReadableTime(31536000));
        $this->assertEquals('2 years', Filter::formatHumanReadableTime(63072000));
        $this->assertEquals('1.5 years', Filter::formatHumanReadableTime(47304000));
    }







}
