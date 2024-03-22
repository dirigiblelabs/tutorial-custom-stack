package io.dirigible.samples.api.domain;

import java.time.ZonedDateTime;

public class SubExample {

	private ZonedDateTime date;

	public ZonedDateTime getDate() {
		return date;
	}

	public void setDate(ZonedDateTime date) {
		this.date = date;
	}

	public SubExample withDate(ZonedDateTime date) {
		setDate(date);
		return this;
	}
}
