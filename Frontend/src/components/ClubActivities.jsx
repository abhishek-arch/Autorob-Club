import React from 'react'
import { Card, CardContent } from "@/components/card";
import {
 
  FaTrophy,
  FaLightbulb,
  FaTools,

} from "react-icons/fa";

function ClubActivities() {
  const activities = [
    {
      name: "Workshops",
      icon: <FaLightbulb size={50} className="text-yellow-400 mx-auto" />,
    },
    {
      name: "Competitions",
      icon: <FaTrophy size={50} className="text-red-400 mx-auto" />,
    },
    {
      name: "Projects",
      icon: <FaTools size={50} className="text-green-400 mx-auto" />,
    },
  ];

  return (
    <section className=" relative pt-[48px] pb-[30px] text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Club Activities</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {activities.map((activity, index) => (
          <Card
            key={index}
            className="bg-gray-800 card p-8 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <CardContent className="text-center">
              {activity.icon}
              <h3 className="text-2xl font-semibold text-blue-300 mt-4">
                {activity.name}
              </h3>
              <p className="text-gray-400 mt-2">
                Exciting hands-on experiences for members.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default ClubActivities
