export const graphData = {
  nodes: [
    { id: "0", label: "0. Foundations", type: "main" },
    { id: "1", label: "1. Basic ROS2", type: "main" },
    { id: "2", label: "2. ROS Basics", type: "main" },
    { id: "3", label: "3. Intermediate ROS2", type: "main" },
    { id: "4", label: "4. Robotics Theory", type: "main" },
    { id: "5", label: "5. Navigation ROS2", type: "main" },
    { id: "7", label: "7. Manipulation", type: "main" },
    { id: "8", label: "8. Robot Creation", type: "main" },
    { id: "9", label: "9. Artificial Intelligence", type: "main" },
    { id: "10", label: "10. ROS Debugging", type: "main" },
    { id: "11", label: "11. Course of product", type: "main" },
    { id: "12", label: "12. Web Devel for Robots", type: "main" },
    { id: "13", label: "13. Simulation", type: "main" },
    { id: "14", label: "14. Enterprise", type: "main" },
    { id: "cpp_basics", label: "C++ Basics for robotics", type: "course" },
    { id: "linux_robotics", label: "Linux for robotics", type: "course" },
    { id: "urdf_ros2", label: "URDF robot modelling ROS2", type: "course" },
    { id: "python_robotics", label: "Python 3 for robotics", type: "course" },
    { id: "tf_ros2", label: "TF in ROS2", type: "course" },
    { id: "gazebo_ros2", label: "Gazebo Sim with ROS2", type: "course" },
    { id: "ros2_basics_python", label: "ROS2 Basics in 5 days (Python)", type: "course" },
    { id: "ros2_basics_cpp", label: "ROS2 Basics in 5 days (C++)", type: "course" },
    { id: "ros2_basics_rust", label: "ROS2 Basics in 3 days (Rust)", type: "course" },
    { id: "nav2_basics", label: "Nav2 Basics", type: "course" },
    { id: "nav_advanced", label: "Nav Advanced", type: "course" },
    { id: "ros2_security", label: "ROS2 Security", type: "course" },
    { id: "rtab", label: "RTAB", type: "course" },
    { id: "ros1_ros2_migration", label: "ROS1-ROS2 Migration", type: "course" },
    { id: "behavior_trees", label: "Behavior Trees for ROS2", type: "course" },
    { id: "advanced_cpp", label: "Advanced Modern C++ for robotics", type: "course" },
    { id: "ros2_control", label: "ROS2 Control", type: "course" },
    { id: "intermediate_ros2_python", label: "Intermediate ROS2 (Python)", type: "course" },
    { id: "intermediate_ros2_cpp", label: "Intermediate ROS2 (C++)", type: "course" }
  ],
  edges: [
   
    { source: "0", target: "1" },    
    { source: "0", target: "2" },     
    { source: "2", target: "1" },     
    { source: "1", target: "3" },    
    { source: "1", target: "5" },
    { source: "0", target: "cpp_basics" },
    { source: "0", target: "linux_robotics" },
    { source: "0", target: "python_robotics" },
    { source: "0", target: "tf_ros2" },
    { source: "1", target: "urdf_ros2" },
    { source: "1", target: "ros2_basics_python" },
    { source: "1", target: "ros2_basics_cpp" },
    { source: "1", target: "ros2_basics_rust" },
    { source: "1", target: "ros2_security" },
    { source: "3", target: "ros1_ros2_migration" },
    { source: "3", target: "behavior_trees" },
    { source: "3", target: "advanced_cpp" },
    { source: "3", target: "intermediate_ros2_python" },
    { source: "3", target: "intermediate_ros2_cpp" },
    { source: "3", target: "ros2_control" },
    { source: "3", target: "rtab" },
    { source: "5", target: "nav2_basics" },
    { source: "5", target: "nav_advanced" },
    { source: "13", target: "0" },
    { source: "2", target: "gazebo_ros2" }
  ]
} 