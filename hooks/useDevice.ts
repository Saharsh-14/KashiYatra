"use client";

import { useEffect, useState } from "react";
import { isTouchDevice, isWebGLAvailable } from "@/lib/performance";

export interface DeviceInfo {
  isTouch: boolean;
  hasWebGL: boolean;
  isMounted: boolean;
}

export function useDevice(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>({
    isTouch: false,
    hasWebGL: true,
    isMounted: false,
  });

  useEffect(() => {
    setDevice({
      isTouch: isTouchDevice(),
      hasWebGL: isWebGLAvailable(),
      isMounted: true,
    });
  }, []);

  return device;
}
