import * as ToastPrimitives from '@radix-ui/react-toast';
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = ToastPrimitives.Viewport;
import { Toast } from './toast';
import { useToast } from './use-toast';
import React from 'react';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';

const ToastTitle = ToastPrimitives.Title;
const ToastDescription = ToastPrimitives.Description;
const ToastClose = ToastPrimitives.Close;

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => {
				return (
					<Toast key={id} {...props}>
						<div className="grid gap-1">
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && (
								<ToastDescription>{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
