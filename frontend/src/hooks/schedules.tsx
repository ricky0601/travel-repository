import React from 'react';
import Schedule from './schedule';
import { SchedulesBox, SchedulesWrap } from './schedules.style';

interface SchedulesProps {
    numberOfDays: number;
}

const Schedules: React.FC<SchedulesProps> = ({ numberOfDays }) => {

    const daysCount = Math.max(0, numberOfDays);

    const daysArray = Array.from({ length: daysCount }, (_, index) => index + 1);

    return (
        <SchedulesBox>
            {daysArray.length > 0 ? (
                <SchedulesWrap>
                {/* daysArray를 순회하며 각 day에 해당하는 Schedule 컴포넌트를 렌더링 */}
                {daysArray.map((day) => (
                    // key는 React가 목록 항목을 식별하는 데 필요합니다.
                    // day 값을 Schedule 컴포넌트로 전달하여 몇 일차인지 알 수 있게 합니다.
                    <Schedule key={day} dayNumber={day} />
                ))}
                </SchedulesWrap>
            ) : (
                <p>날짜가 선택되지 않았습니다.</p>
            )}
        </SchedulesBox>
    );
};

export default Schedules;
