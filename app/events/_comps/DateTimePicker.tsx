import React, { useState } from 'react';

const DateTimePicker = ({ date, setDate }: any) => {


    const handleStartDateChange = (event: any) => {
        setDate({
            ...date,
            startDateTime: event.target.value
        });
    };

    const handleEndDateChange = (event: any) => {
        setDate({
            ...date,
            endDateTime: event.target.value
        });
    };

    return (
        <div>
            <div className='p-2'>
                <div>Start Time</div>
                <input
                    type='datetime-local'
                    placeholder='Start Time'
                    className='p-2 rounded dark:text-black'
                    value={date.startDateTime}
                    onChange={handleStartDateChange}
                />
            </div>
            <div className='p-2'>
                <div>End Time</div>
                <input
                    type='datetime-local'
                    placeholder='End Time'
                    className='p-2 rounded dark:text-black'
                    value={date.endDateTime}
                    onChange={handleEndDateChange}
                />
            </div>
        </div>
    );
}

export default DateTimePicker;
