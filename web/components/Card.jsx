import React from "react";
import Link from "next/link";

export default function Card(person) {
  const { member } = person;
  return (
    <div
      className="min-w-3/4 rounded overflow-hidden shadow flex-shrink-0 bg-gray-100"
      key={member.id}
    >
      <img
        className="w-full"
        src={member.imageUrl}
        alt={member.fullname}
      />
      <div className="px-6 py-4 text-gray-700 text-xl">
        <div className="font-bold mb-2 w-full text-center">
          <h2 className="text-3xl text-indigo-900">{member.fullname}</h2>
          <p className="text-2xl text-indigo-900">
            <strong>{member.position}</strong>
          </p>
          <p className="text-2xl text-indigo-900 uppercase">
            <strong>{member.company}</strong>
          </p>
          <p className="text-2xl">
            from class <strong>{member.classNr}</strong>
          </p>
        </div>
        <p>
          How did you hear about the position:{" "}
          <strong>{member.aboutJob}</strong>
        </p>
        <p>
          Did you have a coding assignment: <strong>{member.assignment}</strong>
        </p>
        <p>
          How many rounds of interviews:{" "}
          <strong>{member.interviewRounds}</strong>
        </p>
        <p>
          Comments:{" "}
          <strong>{member.comments}</strong>
        </p>
      </div>
      <div className="w-2/4 flex justify-around p-10 float-right">
        {member.linkedIn && (
          <Link className="w-full" href={member.linkedIn}>
            <img
              className="w-1/6 h-auto  md:rounded-none mx-auto"
              src="/linkedIn.png"
              alt={member.linkedIn}
            />
          </Link>
        )}
        {member.github && (
          <Link className="w-full" href={member.github}>
            <img
              className="w-1/6 h-auto  md:rounded-none mx-auto"
              src="/github.png"
              alt={member.github}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
