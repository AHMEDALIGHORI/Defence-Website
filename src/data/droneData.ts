export const droneData = {
    hero: {
        title: "THE EXECUTIONER",
        subtitle: "Next-generation tactical autonomous drone system. 850 kW hybrid engine.",
        videoPath: "/videos/hero/executioner-tactical-operations.mp4",
    },
    features: [
        {
            id: "vulcan",
            title: "VULCAN M134",
            subtitle: "6,000 rounds per minute. Unrivaled suppression.",
            videoPath: "/videos/closeups/vulcan-cannon.mp4",
            align: "center" as const,
        },
        {
            id: "silent-flight",
            title: "SILENT FLIGHT",
            subtitle: "Dual-rotor system. Acoustic signature reduced by 60%.",
            videoPath: "/videos/closeups/rotor-assembly.mp4",
            align: "left" as const,
        },
        {
            id: "all-seeing",
            title: "ALL-SEEING",
            subtitle: "Multi-spectral imaging meets edge AI.",
            videoPath: "/videos/closeups/sensor-integration.mp4",
            align: "right" as const,
        },
    ],
    pricing: [
        {
            id: "civilian",
            name: "Research / Civilian",
            price: "$250,000",
            features: ["Restricted Flight Params", "Standard Support", "1-Year Warranty"],
            highlighted: false,
        },
        {
            id: "government",
            name: "Defense Contractor",
            price: "$850,000",
            features: ["Full Weapon Systems", "Military Encryption", "Priority Support"],
            highlighted: true,
        },
        {
            id: "enterprise",
            name: "Enterprise Security",
            price: "Custom Quote",
            features: ["Perimeter Defense", "Autonomous Patrol", "Fleet Management"],
            highlighted: false,
        },
    ],
    specs: {
        dimensions: "4.2m wingspan × 2.1m length",
        weight: "180 kg (empty)",
        maxSpeed: "320 km/h",
        range: "500 km",
        endurance: "8 hours",
        ceiling: "6,000 m",
        payload: "45 kg",
        engine: "850 kW hybrid turboshaft",
    },
};
